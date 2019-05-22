using OPTANO.Modeling.Common;
using OPTANO.Modeling.Optimization;
using OPTANO.Modeling.Optimization.Configuration;
using OPTANO.Modeling.Optimization.Enums;
using OPTANO.Modeling.Optimization.Solver.GLPK;
using System.Collections.Generic;
using OtimizacaoFoodTruck.Entitys;



namespace OtimizacaoFoodTruck.Business
{
    public class GlpkBusiness
    {
        public IDictionary<string,double> Otimizacao(Ingredientes ingredientes)
        {
            var config = new Configuration
            {
                NameHandling = NameHandlingStyle.Manual
            };

            using (var scope = new ModelScope(config))
            {
                var model = new Model();

                #region Variáveis
                var x = new Variable[6];
                x[0] = new Variable("quantidadeBacon".ToString(), 0, 9090909090909, VariableType.Integer);
                /* {
                     Value = ingredientes.QuantidadeBacon
                 };*/
                x[1] = new Variable("quantidadeBatataPalha", 0, 9090909090909, VariableType.Integer);
                /*{
                    Value = ingredientes.QuantidadeBatataPalha
                };*/
                x[2] = new Variable("quantidadeKetchup", 0, 9090909090909, VariableType.Integer);
                /*{
                    Value = ingredientes.QuantidadeKetchup
                };*/
                x[3] = new Variable("quantidadeMilho", 0, 9090909090909, VariableType.Integer);
                /*{
                    Value = ingredientes.QuantidadeMilho
                };*/
                x[4] = new Variable("quantidadePao", 0, 9090909090909, VariableType.Integer);
               /* {
                    Value = ingredientes.QuantidadePao
                };*/
                x[5] = new Variable("quantidadeSalsicha", 0, 9090909090909, VariableType.Integer);
               /* {
                    Value = ingredientes.QuantidadeSalsicha
                };*/
                #endregion

                // Função Objetivo
                // Cada aresta/caminho multiplicada pelo seu respectivo peso/distância
                model.AddObjective(new Objective(
                    x[0]*ingredientes.PrecoBacon+ x[1] * ingredientes.PrecoBatataPalha + x[2] * ingredientes.PrecoKetchup + x[3] * ingredientes.PrecoMilho + x[4] * ingredientes.PrecoPao + x[5] * ingredientes.PrecoSalsicha
                , string.Empty, ObjectiveSense.Minimize));

                #region Restrições
                // Para cada vértice, as arestas de entrada são positivas e as de saída são negativas
                // Valor da expressão
                int value = 0;
                // 0
                //value = Vi == 0 ? -1 : Vf == 0 ? 1 : 0;
                model.AddConstraint((ingredientes.PrecoBacon*x[0] + ingredientes.PrecoBatataPalha*x[1] + ingredientes.PrecoKetchup*x[2] + ingredientes.PrecoPao*x[4] + ingredientes.PrecoMilho*x[3] + ingredientes.PrecoSalsicha*x[5])<=ingredientes.CapitalDeGiro);
                model.AddConstraint(x[4] >= (ingredientes.QuantidadePao)*(ingredientes.DemandaKetchup + ingredientes.DemandaBacon + ingredientes.DemandaBatataPalha + ingredientes.DemandaMilho)  );
                model.AddConstraint(x[5] >= (ingredientes.QuantidadeSalsicha)*(ingredientes.DemandaKetchup + ingredientes.DemandaBacon + ingredientes.DemandaBatataPalha + ingredientes.DemandaMilho));
                model.AddConstraint(x[3] >= ingredientes.QuantidadeKetchup*ingredientes.DemandaKetchup);
                model.AddConstraint(x[0] >= ingredientes.QuantidadeBacon* ingredientes.DemandaBacon);
                model.AddConstraint(x[1] >= ingredientes.QuantidadeBatataPalha*ingredientes.DemandaBatataPalha);
                model.AddConstraint(x[2] >= ingredientes.QuantidadeMilho*ingredientes.DemandaMilho);
                #region Condições de não-negatividade
                x.ForEach(variable =>
                {
                    model.AddConstraint(variable >= 0);
                });
                #endregion
                #endregion

                using (var solver = new GLPKSolver())
                {
                    model.Name = "otimization";
                    var solution = solver.Solve(model);


                    if (solution.VariableValues != null)
                    {
                        return solution.VariableValues;
                    }

                    else
                    {
                        return null;
                    }
                }
            }
        }
    }
}
