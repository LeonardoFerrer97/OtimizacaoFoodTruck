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
                //Setar as variaveis para respostas da função objetivo, sendo todas inteiros com um limite simbolico
                var x = new Variable[6];
                x[0] = new Variable("quantidadeBacon", 0, 9090909090909, VariableType.Integer);// Quantidade de bacon a ser comprado
                x[1] = new Variable("quantidadeBatataPalha", 0, 9090909090909, VariableType.Integer);// Quantidade de batata palha a ser comprado
                x[2] = new Variable("quantidadeKetchup", 0, 9090909090909, VariableType.Integer);// Quantidade de ketchup a ser comprado
                x[3] = new Variable("quantidadeMilho", 0, 9090909090909, VariableType.Integer);// Quantidade de milho a ser comprado
                x[4] = new Variable("quantidadePao", 0, 9090909090909, VariableType.Integer);// Quantidade de pao a ser comprado
                x[5] = new Variable("quantidadeSalsicha", 0, 9090909090909, VariableType.Integer);// Quantidade de salsicha a ser comprado
                #endregion

                // Função Objetivo
                // as variaveis setadas acima multiplicadas pelo respectivo preço do ingrediente
                //objetivo-> minimizar
                model.AddObjective(new Objective(
                    x[0]*ingredientes.PrecoBacon+ x[1] * ingredientes.PrecoBatataPalha + x[2] * ingredientes.PrecoKetchup + 
                    x[3] * ingredientes.PrecoMilho + x[4] * ingredientes.PrecoPao + x[5] * ingredientes.PrecoSalsicha
                , string.Empty, ObjectiveSense.Minimize));

                #region Restrições

                //capital de giro deve ser maior que a função objetivo
                model.AddConstraint((ingredientes.PrecoBacon*x[0] + ingredientes.PrecoBatataPalha*x[1] + ingredientes.PrecoKetchup*x[2] 
                    + ingredientes.PrecoPao*x[4] + ingredientes.PrecoMilho*x[3] + ingredientes.PrecoSalsicha*x[5])<=ingredientes.CapitalDeGiro);

                //a quantidade de pães na solução deve ser maior que a quantidade usada por cachorro quente de pao multiplicada 
                //pela demanda de todos os tipos
                model.AddConstraint(x[4] >= (ingredientes.QuantidadePao)*(ingredientes.DemandaKetchup + ingredientes.DemandaBacon +
                    ingredientes.DemandaBatataPalha + ingredientes.DemandaMilho)  );

                //a quantidade de salsicha na solução deve ser maior que a quantidade usada por cachorro quente 
                //de salsicha multiplicada pela demanda de todos os tipos
                model.AddConstraint(x[5] >= (ingredientes.QuantidadeSalsicha)*(ingredientes.DemandaKetchup + ingredientes.DemandaBacon + 
                    ingredientes.DemandaBatataPalha + ingredientes.DemandaMilho));

                //a quantidade de ketchup deve ser maior que a quantidade de ketchup utilizada por cachorro quente
                //multiplicada pela demanda do tipo do cachorro quente que utiliza o ingrediente
                model.AddConstraint(x[3] >= ingredientes.QuantidadeKetchup*ingredientes.DemandaKetchup);

                //a quantidade de bacon deve ser maior que a quantidade de bacon utilizada por cachorro quente
                //multiplicada pela demanda do tipo de cachorro quente que utiliza o ingrediente
                model.AddConstraint(x[0] >= ingredientes.QuantidadeBacon* ingredientes.DemandaBacon);

                //a quantidade de batata palha deve ser maior que a quantidade de batata palha utilizada 
                //por cachorro quente multiplicada pela demanda do tipo de cachorro quente que utiliza o ingrediente
                model.AddConstraint(x[1] >= ingredientes.QuantidadeBatataPalha*ingredientes.DemandaBatataPalha);

                //a quantidade de milho deve ser maior que a quantidade de milho utilizada por cachorro quente 
                //multiplicada pela demanda do tipo de cachorro quente que utiliza o ingrediente
                model.AddConstraint(x[2] >= ingredientes.QuantidadeMilho*ingredientes.DemandaMilho);
                
                //nenhuma variavel pode ser negativa
                x.ForEach(variable =>
                {
                    model.AddConstraint(variable >= 0);
                });
                #endregion

                //inicio resolução
                using (var solver = new GLPKSolver())
                {
                    model.Name = "otimization";
                    var solution = solver.Solve(model);

                    //caso haja solução, retorno a mesma
                    if (solution.VariableValues != null)
                    {
                        var resp = solution.VariableValues;
                        solution.ObjectiveValues.TryGetValue("A", out double Z);
                        resp.Add("z",Z) ;
                        return resp;
                    }
                    
                    //caso não haja solução, retorno nulo para o front end saber que nao houve solução
                    else
                    {
                        return null;
                    }
                }
            }
        }
    }
}
