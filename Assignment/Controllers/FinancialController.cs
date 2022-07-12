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
    public class FinancialController : ApiController
    {
        public IEnumerable<Financial> Get()
        {
            using (FinancialDataEntities connection = new FinancialDataEntities())
            {
                return connection.Financials.ToList();
            }
        }

        [Route("api/list")]
        public Financial GetList(int Year)
        {
            using (FinancialDataEntities connection = new FinancialDataEntities())
            {
                return connection.Financials.ToList().FirstOrDefault(e => e.Year == Year);
            }
        }

        [Route("api/load")]
        public IEnumerable<Financial> GetLoad()
        {
            using (FinancialDataEntities connection = new FinancialDataEntities())
            {
                return connection.Financials.ToList().Where(e => e.Status == 1);
            }
        }

        [Route("api/add")]
        public IEnumerable<Financial> GetAdd()
        {
            using (FinancialDataEntities connection = new FinancialDataEntities())
            {
                return connection.Financials.ToList().Where(e => e.Status == 1);
            }
        }

        [Route("api/edit")]
        public IEnumerable<Financial> GetEdit() 
        {
            using (FinancialDataEntities connection = new FinancialDataEntities())
            {
                return connection.Financials.ToList().Where(e => e.Status == 1);
            }
        }

        [Route("api/delete")]
        public IEnumerable<Financial> GetDelete()
        {
            using (FinancialDataEntities connection = new FinancialDataEntities())
            {
                return connection.Financials.ToList().Where(e => e.Status == 1);
            }
        }
    }
}
