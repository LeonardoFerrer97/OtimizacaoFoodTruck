const yasmij = require('yasmij')
module.exports = {
    otimizar: entry => {
        const ing = {
            quantidadeBacon:entry.quantidadeBacon,
            quantidadeMilho:entry.quantidadeMilho,
            quantidadeSalsicha:entry.quantidadeSalsicha,
            quantidadePao:entry.quantidadePao,
            quantidadeKetchup:entry.quantidadeKetchup,
            quantidadeBatataPalha:entry.quantidadeBatataPalha,
            precoBacon:entry.precoBacon,
            precoMilho:entry.precoMilho,
            precoSalsicha:entry.precoSalsicha,
            precoPao:entry.precoPao,
            precoKetchup:entry.precoKetchup,
            precoBatataPalha:entry.precoBatataPalha,
            demandaBacon:entry.demandaBanco,
            demandaMilho:entry.demandaMilho,
            demandaKetchup:entry.demandaKetchup,
            demandaBatataPalha:entry.demandaBatataPalha,
            capitalDeGiro:entry.capitalDeGiro,
        };
        input = {
            type: 'minimize',
            objective: `${ing.quantidadeBacon*ing.precoBacon}+
            ${ing.quantidadeMilho*ing.precoMilho}+
            ${ing.precoPao*ing.quantidadePao}+
            ${ing.precoKetchup*ing.quantidadeKetchup}+
            ${ing.quantidadeSalsicha*ing.precoSalsicha}+
            ${ing.precoBatataPalha*ing.quantidadeBatataPalha}`,
            constraints: [

                `${custoTotal(ing)*quantidadeTotal(ing)}>${ing.capitalDeGiro}`,
                `${ing.quantidadeBacon/5}>${ing.demandaBacon}`,
                `${ing.quantidadeMilho/0.3}>${ing.demandaMilho}`,
                `${ing.quantidadeBatataPalha/0.2}>${ing.demandaBatataPalha}`,
                `${ing.quantidadeKetchup/4}>${ing.demandaKetchup}`,
                `${0}<=${quantidadeTotal(ing)}`,
                `${0}<=${custoTotal(ing)}`,
            ]
        }
        return yasmij.solve(input);
    }
}

custoTotal = (ing) =>{
    return (ing.precoBacon+ing.precoBatataPalha+ing.precoKetchup+ing.precoMilho+ing.precoPao+ing.precoSalsicha)
}

quantidadeTotal = (ing) =>{
    return (ing.quantidadeBacon+ing.quantidadeBatataPalha+ing.quantidadeKetchup+ing.quantidadeMilho+ing.quantidadePao+ing.quantidadeSalsicha)
}

demandaTotal = (ing) => {
    return (ing.demandaBacon*ing.demandaBatataPalha*ing.demandaMilho*ing.demandaKetchup)
}