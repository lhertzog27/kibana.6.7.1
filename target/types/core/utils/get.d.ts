/**
 * Retrieve the value for the specified path
 *
 * Note that dot is _not_ allowed to specify a deeper key, it will assume that
 * the dot is part of the key itself.
 */
export declare function get<CFG extends {
    [k: string]: any;
}, A extends keyof CFG, B extends keyof CFG[A], C extends keyof CFG[A][B], D extends keyof CFG[A][B][C], E extends keyof CFG[A][B][C][D]>(obj: CFG, path: [A, B, C, D, E]): CFG[A][B][C][D][E];
export declare function get<CFG extends {
    [k: string]: any;
}, A extends keyof CFG, B extends keyof CFG[A], C extends keyof CFG[A][B], D extends keyof CFG[A][B][C]>(obj: CFG, path: [A, B, C, D]): CFG[A][B][C][D];
export declare function get<CFG extends {
    [k: string]: any;
}, A extends keyof CFG, B extends keyof CFG[A], C extends keyof CFG[A][B]>(obj: CFG, path: [A, B, C]): CFG[A][B][C];
export declare function get<CFG extends {
    [k: string]: any;
}, A extends keyof CFG, B extends keyof CFG[A]>(obj: CFG, path: [A, B]): CFG[A][B];
export declare function get<CFG extends {
    [k: string]: any;
}, A extends keyof CFG>(obj: CFG, path: [A] | A): CFG[A];
//# sourceMappingURL=get.d.ts.map