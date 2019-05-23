using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OtimizacaoFoodTruck.Entitys
{
    public class Ingredientes
    {

        public int QuantidadeBacon { get; set; }
        public int QuantidadeMilho { get; set; }
        public int QuantidadeSalsicha { get; set; }
        public int QuantidadePao { get; set; }
        public int QuantidadeKetchup { get; set; }
        public int QuantidadeBatataPalha { get; set; }
        public double PrecoBacon { get; set; }
        public double PrecoMilho { get; set; }
        public double PrecoSalsicha { get; set; }
        public double PrecoPao { get; set; }
        public double PrecoKetchup { get; set; }
        public double PrecoBatataPalha { get; set; }
        public double DemandaBacon { get; set; }
        public double DemandaMilho { get; set; }
        public double DemandaKetchup { get; set; }
        public double DemandaBatataPalha { get; set; } 
        public double CapitalDeGiro { get; set; }
    }
}
