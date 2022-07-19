using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataAccess;

namespace Assignment.Controllers
{
      [RoutePrefix("api")]
      public class FinancialController : ApiController
      {
        [HttpGet]
        [Route("get")]
        public IEnumerable<Financial> Get()
        {
          using (FinancialDataEntities connection = new FinancialDataEntities())
          {
            return connection.Financials.ToList();
          }
        }

        [HttpGet]
        [Route("list")]
        public Financial GetList(int Year,int Status)
        {
            using (FinancialDataEntities connection = new FinancialDataEntities())
            {
                return connection.Financials.ToList().Where(e => e.Status == Status).FirstOrDefault(e => e.Year == Year);
            }
        }
        [HttpGet]
        [Route("load")]
        public IEnumerable<Financial> GetLoad()
        {
            using (FinancialDataEntities connection = new FinancialDataEntities())
            {
                return connection.Financials.ToList().Where(e => e.Status == 1).Take(7);
            }
        }

        [HttpPost]
        [Route("add")]
        public HttpResponseMessage Post([FromBody]Financial data)
        {
            using (FinancialDataEntities connection = new FinancialDataEntities())
            {
                //connection.Configuration.
                var message = Request.CreateResponse(HttpStatusCode.Created);
                var find = connection.Financials.Where(s => s.Year == data.Year).FirstOrDefault<Financial>();
                if(find == null && ModelState.IsValid)
                {
                    connection.Financials.Add(data);
                    connection.SaveChanges();
                    message.Headers.Location = new Uri(Request.RequestUri + "YES");
                }
                else
                {
                    message.Headers.Location = new Uri(Request.RequestUri + "NO");
                }
                
                return message;
            }
        }

        [HttpPut]
        [Route("edit")]
        public IHttpActionResult Put([FromBody] Financial data) 
        {
            using (FinancialDataEntities connection = new FinancialDataEntities())
            {

                var OldData = connection.Financials.Where(s => s.Year == data.Year).FirstOrDefault<Financial>();

                if (OldData != null)
                {
                    OldData.Year = data.Year;
                    OldData.Asset = data.Asset;
                    OldData.Liabilities = data.Liabilities;
                    OldData.Equities = data.Equities;
                    OldData.Status = data.Status;


                    connection.SaveChanges();
                }else
                {
                    return NotFound();
                }
            }
            return Ok();
        }

        [HttpDelete]
        [Route("delete")]
        public HttpResponseMessage Delete([FromBody] Financial data)
        {
            using (FinancialDataEntities connection = new FinancialDataEntities())
            {
                connection.Entry(connection.Financials.Where(s => s.Year == data.Year).FirstOrDefault<Financial>()).State = System.Data.Entity.EntityState.Deleted;
                connection.SaveChanges();

                var message = Request.CreateResponse(HttpStatusCode.Created);

                message.Headers.Location = new Uri(Request.RequestUri + "YES");
                return message;
            }
        }
    }
}
