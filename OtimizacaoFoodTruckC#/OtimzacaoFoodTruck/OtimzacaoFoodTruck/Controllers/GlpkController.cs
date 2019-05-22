using Microsoft.AspNetCore.Mvc;
using OtimizacaoFoodTruck.Business;
using OtimizacaoFoodTruck.Entitys;
using System.Collections.Generic;

namespace OtimzacaoFoodTruck.Controllers
{
    [Route("api/")]
    [ApiController]
    public class GlpkController : ControllerBase
    {
        private readonly GlpkBusiness glpk = new GlpkBusiness();
        [HttpPost("glpk")]
        public IDictionary<string,double> Glpk([FromBody]Ingredientes Ingredientes)
        {
            return glpk.Otimizacao(Ingredientes);
        }
    }
}
