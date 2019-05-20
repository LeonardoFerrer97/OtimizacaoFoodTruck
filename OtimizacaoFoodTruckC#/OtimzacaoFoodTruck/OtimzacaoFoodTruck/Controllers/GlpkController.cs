using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OtimizacaoFoodTruck.Business;
using OtimizacaoFoodTruck.Entitys;

namespace OtimzacaoFoodTruck.Controllers
{
    [Route("api/")]
    [ApiController]
    public class GlpkController : ControllerBase
    {
        private readonly GlpkBusiness glpk = new GlpkBusiness();
        [HttpPost("glpk")]
        public bool Glpk([FromBody]Ingredientes Ingredientes)
        {
            return glpk.Otimizacao(Ingredientes);
        }
    }
}
