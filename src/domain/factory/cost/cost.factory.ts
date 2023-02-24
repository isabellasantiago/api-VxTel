import { DDDEnum } from "src/common/enums/ddd.enum";


export function costFactory(from: DDDEnum, to: DDDEnum): number {
    if(from === DDDEnum.SAO_PAULO && to === DDDEnum.BARRINHAS_REGIAO) return 1.90
    
    if(from === DDDEnum.BARRINHAS_REGIAO && to === DDDEnum.SAO_PAULO) return 2.90


    if(from === DDDEnum.SAO_PAULO && to === DDDEnum.ALTAIR_REGIAO) return 1.70

    if(from === DDDEnum.ALTAIR_REGIAO && to === DDDEnum.SAO_PAULO) return 2.70


    if(from === DDDEnum.SAO_PAULO && to === DDDEnum.ADAMANTINA_REGIAO) return 0.90

    if(from === DDDEnum.ADAMANTINA_REGIAO && to === DDDEnum.SAO_PAULO) return 1.90
}

