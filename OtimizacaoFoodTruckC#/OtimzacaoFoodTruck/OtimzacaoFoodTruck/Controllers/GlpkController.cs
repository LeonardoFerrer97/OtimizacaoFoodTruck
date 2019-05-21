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
        public string Glpk([FromBody]Ingredientes Ingredientes)
        {
            var res = glpk.Otimizacao(Ingredientes);
            return res;
        }
    }
}
