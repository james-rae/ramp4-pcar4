function gt(t) {
  return vt(t.map(([n, e]) => new Array(n).fill(e, 0, n)));
}
function vt(t) {
  return t.reduce((n, e) => n.concat(Array.isArray(e) ? vt(e) : e), []);
}
const sn = [0, 1, 2, 3].concat(...gt([
  [2, 4],
  [2, 5],
  [4, 6],
  [4, 7],
  [8, 8],
  [8, 9],
  [16, 10],
  [16, 11],
  [32, 12],
  [32, 13],
  [64, 14],
  [64, 15],
  [2, 0],
  [1, 16],
  [1, 17],
  [2, 18],
  [2, 19],
  [4, 20],
  [4, 21],
  [8, 22],
  [8, 23],
  [16, 24],
  [16, 25],
  [32, 26],
  [32, 27],
  [64, 28],
  [64, 29]
]));
function $() {
  const t = this;
  function n(r) {
    const s = t.dyn_tree, a = t.stat_desc.static_tree, d = t.stat_desc.extra_bits, o = t.stat_desc.extra_base, x = t.stat_desc.max_length;
    let u, p, m, v, D, f, c = 0;
    for (v = 0; v <= 15; v++)
      r.bl_count[v] = 0;
    for (s[r.heap[r.heap_max] * 2 + 1] = 0, u = r.heap_max + 1; u < 573; u++)
      p = r.heap[u], v = s[s[p * 2 + 1] * 2 + 1] + 1, v > x && (v = x, c++), s[p * 2 + 1] = v, !(p > t.max_code) && (r.bl_count[v]++, D = 0, p >= o && (D = d[p - o]), f = s[p * 2], r.opt_len += f * (v + D), a && (r.static_len += f * (a[p * 2 + 1] + D)));
    if (c !== 0) {
      do {
        for (v = x - 1; r.bl_count[v] === 0; )
          v--;
        r.bl_count[v]--, r.bl_count[v + 1] += 2, r.bl_count[x]--, c -= 2;
      } while (c > 0);
      for (v = x; v !== 0; v--)
        for (p = r.bl_count[v]; p !== 0; )
          m = r.heap[--u], !(m > t.max_code) && (s[m * 2 + 1] != v && (r.opt_len += (v - s[m * 2 + 1]) * s[m * 2], s[m * 2 + 1] = v), p--);
    }
  }
  function e(r, s) {
    let a = 0;
    do
      a |= r & 1, r >>>= 1, a <<= 1;
    while (--s > 0);
    return a >>> 1;
  }
  function i(r, s, a) {
    const d = [];
    let o = 0, x, u, p;
    for (x = 1; x <= 15; x++)
      d[x] = o = o + a[x - 1] << 1;
    for (u = 0; u <= s; u++)
      p = r[u * 2 + 1], p !== 0 && (r[u * 2] = e(d[p]++, p));
  }
  t.build_tree = function(r) {
    const s = t.dyn_tree, a = t.stat_desc.static_tree, d = t.stat_desc.elems;
    let o, x, u = -1, p;
    for (r.heap_len = 0, r.heap_max = 573, o = 0; o < d; o++)
      s[o * 2] !== 0 ? (r.heap[++r.heap_len] = u = o, r.depth[o] = 0) : s[o * 2 + 1] = 0;
    for (; r.heap_len < 2; )
      p = r.heap[++r.heap_len] = u < 2 ? ++u : 0, s[p * 2] = 1, r.depth[p] = 0, r.opt_len--, a && (r.static_len -= a[p * 2 + 1]);
    for (t.max_code = u, o = Math.floor(r.heap_len / 2); o >= 1; o--)
      r.pqdownheap(s, o);
    p = d;
    do
      o = r.heap[1], r.heap[1] = r.heap[r.heap_len--], r.pqdownheap(s, 1), x = r.heap[1], r.heap[--r.heap_max] = o, r.heap[--r.heap_max] = x, s[p * 2] = s[o * 2] + s[x * 2], r.depth[p] = Math.max(r.depth[o], r.depth[x]) + 1, s[o * 2 + 1] = s[x * 2 + 1] = p, r.heap[1] = p++, r.pqdownheap(s, 1);
    while (r.heap_len >= 2);
    r.heap[--r.heap_max] = r.heap[1], n(r), i(s, t.max_code, r.bl_count);
  };
}
$._length_code = [0, 1, 2, 3, 4, 5, 6, 7].concat(...gt([
  [2, 8],
  [2, 9],
  [2, 10],
  [2, 11],
  [4, 12],
  [4, 13],
  [4, 14],
  [4, 15],
  [8, 16],
  [8, 17],
  [8, 18],
  [8, 19],
  [16, 20],
  [16, 21],
  [16, 22],
  [16, 23],
  [32, 24],
  [32, 25],
  [32, 26],
  [31, 27],
  [1, 28]
]));
$.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0];
$.base_dist = [
  0,
  1,
  2,
  3,
  4,
  6,
  8,
  12,
  16,
  24,
  32,
  48,
  64,
  96,
  128,
  192,
  256,
  384,
  512,
  768,
  1024,
  1536,
  2048,
  3072,
  4096,
  6144,
  8192,
  12288,
  16384,
  24576
];
$.d_code = function(t) {
  return t < 256 ? sn[t] : sn[256 + (t >>> 7)];
};
$.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
$.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
$.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
$.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
function z(t, n, e, i, r) {
  const s = this;
  s.static_tree = t, s.extra_bits = n, s.extra_base = e, s.elems = i, s.max_length = r;
}
const Vi = [
  12,
  140,
  76,
  204,
  44,
  172,
  108,
  236,
  28,
  156,
  92,
  220,
  60,
  188,
  124,
  252,
  2,
  130,
  66,
  194,
  34,
  162,
  98,
  226,
  18,
  146,
  82,
  210,
  50,
  178,
  114,
  242,
  10,
  138,
  74,
  202,
  42,
  170,
  106,
  234,
  26,
  154,
  90,
  218,
  58,
  186,
  122,
  250,
  6,
  134,
  70,
  198,
  38,
  166,
  102,
  230,
  22,
  150,
  86,
  214,
  54,
  182,
  118,
  246,
  14,
  142,
  78,
  206,
  46,
  174,
  110,
  238,
  30,
  158,
  94,
  222,
  62,
  190,
  126,
  254,
  1,
  129,
  65,
  193,
  33,
  161,
  97,
  225,
  17,
  145,
  81,
  209,
  49,
  177,
  113,
  241,
  9,
  137,
  73,
  201,
  41,
  169,
  105,
  233,
  25,
  153,
  89,
  217,
  57,
  185,
  121,
  249,
  5,
  133,
  69,
  197,
  37,
  165,
  101,
  229,
  21,
  149,
  85,
  213,
  53,
  181,
  117,
  245,
  13,
  141,
  77,
  205,
  45,
  173,
  109,
  237,
  29,
  157,
  93,
  221,
  61,
  189,
  125,
  253,
  19,
  275,
  147,
  403,
  83,
  339,
  211,
  467,
  51,
  307,
  179,
  435,
  115,
  371,
  243,
  499,
  11,
  267,
  139,
  395,
  75,
  331,
  203,
  459,
  43,
  299,
  171,
  427,
  107,
  363,
  235,
  491,
  27,
  283,
  155,
  411,
  91,
  347,
  219,
  475,
  59,
  315,
  187,
  443,
  123,
  379,
  251,
  507,
  7,
  263,
  135,
  391,
  71,
  327,
  199,
  455,
  39,
  295,
  167,
  423,
  103,
  359,
  231,
  487,
  23,
  279,
  151,
  407,
  87,
  343,
  215,
  471,
  55,
  311,
  183,
  439,
  119,
  375,
  247,
  503,
  15,
  271,
  143,
  399,
  79,
  335,
  207,
  463,
  47,
  303,
  175,
  431,
  111,
  367,
  239,
  495,
  31,
  287,
  159,
  415,
  95,
  351,
  223,
  479,
  63,
  319,
  191,
  447,
  127,
  383,
  255,
  511,
  0,
  64,
  32,
  96,
  16,
  80,
  48,
  112,
  8,
  72,
  40,
  104,
  24,
  88,
  56,
  120,
  4,
  68,
  36,
  100,
  20,
  84,
  52,
  116,
  3,
  131,
  67,
  195,
  35,
  163,
  99,
  227
], Xi = gt([[144, 8], [112, 9], [24, 7], [8, 8]]);
z.static_ltree = vt(Vi.map((t, n) => [t, Xi[n]]));
const Ji = [0, 16, 8, 24, 4, 20, 12, 28, 2, 18, 10, 26, 6, 22, 14, 30, 1, 17, 9, 25, 5, 21, 13, 29, 3, 19, 11, 27, 7, 23], Qi = gt([[30, 5]]);
z.static_dtree = vt(Ji.map((t, n) => [t, Qi[n]]));
z.static_l_desc = new z(z.static_ltree, $.extra_lbits, 257, 286, 15);
z.static_d_desc = new z(z.static_dtree, $.extra_dbits, 0, 30, 15);
z.static_bl_desc = new z(null, $.extra_blbits, 0, 19, 7);
const zi = 9, er = 8;
function he(t, n, e, i, r) {
  const s = this;
  s.good_length = t, s.max_lazy = n, s.nice_length = e, s.max_chain = i, s.func = r;
}
const zn = 0, ut = 1, Le = 2, _e = [
  new he(0, 0, 0, 0, zn),
  new he(4, 4, 8, 4, ut),
  new he(4, 5, 16, 8, ut),
  new he(4, 6, 32, 32, ut),
  new he(4, 4, 16, 16, Le),
  new he(8, 16, 32, 32, Le),
  new he(8, 16, 128, 128, Le),
  new he(8, 32, 128, 256, Le),
  new he(32, 128, 258, 1024, Le),
  new he(32, 258, 258, 4096, Le)
], rt = [
  "need dictionary",
  // Z_NEED_DICT
  // 2
  "stream end",
  // Z_STREAM_END 1
  "",
  // Z_OK 0
  "",
  // Z_ERRNO (-1)
  "stream error",
  // Z_STREAM_ERROR (-2)
  "data error",
  // Z_DATA_ERROR (-3)
  "",
  // Z_MEM_ERROR (-4)
  "buffer error",
  // Z_BUF_ERROR (-5)
  "",
  // Z_VERSION_ERROR (-6)
  ""
], ue = 0, st = 1, Ye = 2, at = 3, tr = 32, At = 42, ot = 113, Ve = 666, Tt = 8, nr = 0, Rt = 1, ir = 2, Y = 3, mt = 258, fe = mt + Y + 1;
function an(t, n, e, i) {
  const r = t[n * 2], s = t[e * 2];
  return r < s || r == s && i[n] <= i[e];
}
function rr() {
  const t = this;
  let n, e, i, r, s, a, d, o, x, u, p, m, v, D, f, c, l, _, g, A, w, h, b, E, R, T, k, N, I, M, j, L, B;
  const H = new $(), ee = new $(), U = new $();
  t.depth = [];
  let ne, Z, W, ke, ie, X;
  t.bl_count = [], t.heap = [], j = [], L = [], B = [];
  function it() {
    x = 2 * s, p[v - 1] = 0;
    for (let y = 0; y < v - 1; y++)
      p[y] = 0;
    T = _e[k].max_lazy, I = _e[k].good_length, M = _e[k].nice_length, R = _e[k].max_chain, w = 0, l = 0, b = 0, _ = E = Y - 1, A = 0, m = 0;
  }
  function We() {
    let y;
    for (y = 0; y < 286; y++)
      j[y * 2] = 0;
    for (y = 0; y < 30; y++)
      L[y * 2] = 0;
    for (y = 0; y < 19; y++)
      B[y * 2] = 0;
    j[256 * 2] = 1, t.opt_len = t.static_len = 0, Z = W = 0;
  }
  function Ue() {
    H.dyn_tree = j, H.stat_desc = z.static_l_desc, ee.dyn_tree = L, ee.stat_desc = z.static_d_desc, U.dyn_tree = B, U.stat_desc = z.static_bl_desc, ie = 0, X = 0, ke = 8, We();
  }
  t.pqdownheap = function(y, C) {
    const S = t.heap, O = S[C];
    let F = C << 1;
    for (; F <= t.heap_len && (F < t.heap_len && an(y, S[F + 1], S[F], t.depth) && F++, !an(y, O, S[F], t.depth)); )
      S[C] = S[F], C = F, F <<= 1;
    S[C] = O;
  };
  function Me(y, C) {
    let S = -1, O, F = y[0 * 2 + 1], P = 0, G = 7, se = 4;
    F === 0 && (G = 138, se = 3), y[(C + 1) * 2 + 1] = 65535;
    for (let xe = 0; xe <= C; xe++)
      O = F, F = y[(xe + 1) * 2 + 1], !(++P < G && O == F) && (P < se ? B[O * 2] += P : O !== 0 ? (O != S && B[O * 2]++, B[16 * 2]++) : P <= 10 ? B[17 * 2]++ : B[18 * 2]++, P = 0, S = O, F === 0 ? (G = 138, se = 3) : O == F ? (G = 6, se = 3) : (G = 7, se = 4));
  }
  function $e() {
    let y;
    for (Me(j, H.max_code), Me(L, ee.max_code), U.build_tree(t), y = 18; y >= 3 && B[$.bl_order[y] * 2 + 1] === 0; y--)
      ;
    return t.opt_len += 3 * (y + 1) + 5 + 5 + 4, y;
  }
  function ge(y) {
    t.pending_buf[t.pending++] = y;
  }
  function Ee(y) {
    ge(y & 255), ge(y >>> 8 & 255);
  }
  function kt(y) {
    ge(y >> 8 & 255), ge(y & 255 & 255);
  }
  function re(y, C) {
    let S;
    const O = C;
    X > 16 - O ? (S = y, ie |= S << X & 65535, Ee(ie), ie = S >>> 16 - X, X += O - 16) : (ie |= y << X & 65535, X += O);
  }
  function pe(y, C) {
    const S = y * 2;
    re(C[S] & 65535, C[S + 1] & 65535);
  }
  function Xt(y, C) {
    let S, O = -1, F, P = y[0 * 2 + 1], G = 0, se = 7, xe = 4;
    for (P === 0 && (se = 138, xe = 3), S = 0; S <= C; S++)
      if (F = P, P = y[(S + 1) * 2 + 1], !(++G < se && F == P)) {
        if (G < xe)
          do
            pe(F, B);
          while (--G !== 0);
        else F !== 0 ? (F != O && (pe(F, B), G--), pe(16, B), re(G - 3, 2)) : G <= 10 ? (pe(17, B), re(G - 3, 3)) : (pe(18, B), re(G - 11, 7));
        G = 0, O = F, P === 0 ? (se = 138, xe = 3) : F == P ? (se = 6, xe = 3) : (se = 7, xe = 4);
      }
  }
  function Bi(y, C, S) {
    let O;
    for (re(y - 257, 5), re(C - 1, 5), re(S - 4, 4), O = 0; O < S; O++)
      re(B[$.bl_order[O] * 2 + 1], 3);
    Xt(j, y - 1), Xt(L, C - 1);
  }
  function Jt() {
    X == 16 ? (Ee(ie), ie = 0, X = 0) : X >= 8 && (ge(ie & 255), ie >>>= 8, X -= 8);
  }
  function Hi() {
    re(Rt << 1, 3), pe(256, z.static_ltree), Jt(), 1 + ke + 10 - X < 9 && (re(Rt << 1, 3), pe(256, z.static_ltree), Jt()), ke = 7;
  }
  function Ke(y, C) {
    let S, O, F;
    if (t.dist_buf[Z] = y, t.lc_buf[Z] = C & 255, Z++, y === 0 ? j[C * 2]++ : (W++, y--, j[($._length_code[C] + 256 + 1) * 2]++, L[$.d_code(y) * 2]++), !(Z & 8191) && k > 2) {
      for (S = Z * 8, O = w - l, F = 0; F < 30; F++)
        S += L[F * 2] * (5 + $.extra_dbits[F]);
      if (S >>>= 3, W < Math.floor(Z / 2) && S < Math.floor(O / 2))
        return !0;
    }
    return Z == ne - 1;
  }
  function Qt(y, C) {
    let S, O, F = 0, P, G;
    if (Z !== 0)
      do
        S = t.dist_buf[F], O = t.lc_buf[F], F++, S === 0 ? pe(O, y) : (P = $._length_code[O], pe(P + 256 + 1, y), G = $.extra_lbits[P], G !== 0 && (O -= $.base_length[P], re(O, G)), S--, P = $.d_code(S), pe(P, C), G = $.extra_dbits[P], G !== 0 && (S -= $.base_dist[P], re(S, G)));
      while (F < Z);
    pe(256, y), ke = y[256 * 2 + 1];
  }
  function zt() {
    X > 8 ? Ee(ie) : X > 0 && ge(ie & 255), ie = 0, X = 0;
  }
  function Gi(y, C, S) {
    zt(), ke = 8, Ee(C), Ee(~C), t.pending_buf.set(o.subarray(y, y + C), t.pending), t.pending += C;
  }
  function en(y, C, S) {
    re((nr << 1) + (S ? 1 : 0), 3), Gi(y, C);
  }
  function qi(y, C, S) {
    let O, F, P = 0;
    k > 0 ? (H.build_tree(t), ee.build_tree(t), P = $e(), O = t.opt_len + 3 + 7 >>> 3, F = t.static_len + 3 + 7 >>> 3, F <= O && (O = F)) : O = F = C + 5, C + 4 <= O && y != -1 ? en(y, C, S) : F == O ? (re((Rt << 1) + (S ? 1 : 0), 3), Qt(z.static_ltree, z.static_dtree)) : (re((ir << 1) + (S ? 1 : 0), 3), Bi(H.max_code + 1, ee.max_code + 1, P + 1), Qt(j, L)), We(), S && zt();
  }
  function Se(y) {
    qi(l >= 0 ? l : -1, w - l, y), l = w, n.flush_pending();
  }
  function Et() {
    let y, C, S, O;
    do {
      if (O = x - b - w, O === 0 && w === 0 && b === 0)
        O = s;
      else if (O == -1)
        O--;
      else if (w >= s + s - fe) {
        o.set(o.subarray(s, s + s), 0), h -= s, w -= s, l -= s, y = v, S = y;
        do
          C = p[--S] & 65535, p[S] = C >= s ? C - s : 0;
        while (--y !== 0);
        y = s, S = y;
        do
          C = u[--S] & 65535, u[S] = C >= s ? C - s : 0;
        while (--y !== 0);
        O += s;
      }
      if (n.avail_in === 0)
        return;
      y = n.read_buf(o, w + b, O), b += y, b >= Y && (m = o[w] & 255, m = (m << c ^ o[w + 1] & 255) & f);
    } while (b < fe && n.avail_in !== 0);
  }
  function Wi(y) {
    let C = 65535, S;
    for (C > i - 5 && (C = i - 5); ; ) {
      if (b <= 1) {
        if (Et(), b === 0 && y == 0)
          return ue;
        if (b === 0)
          break;
      }
      if (w += b, b = 0, S = l + C, (w === 0 || w >= S) && (b = w - S, w = S, Se(!1), n.avail_out === 0) || w - l >= s - fe && (Se(!1), n.avail_out === 0))
        return ue;
    }
    return Se(y == 4), n.avail_out === 0 ? y == 4 ? Ye : ue : y == 4 ? at : st;
  }
  function tn(y) {
    let C = R, S = w, O, F, P = E;
    const G = w > s - fe ? w - (s - fe) : 0;
    let se = M;
    const xe = d, St = w + mt;
    let nn = o[S + P - 1], rn = o[S + P];
    E >= I && (C >>= 2), se > b && (se = b);
    do
      if (O = y, !(o[O + P] != rn || o[O + P - 1] != nn || o[O] != o[S] || o[++O] != o[S + 1])) {
        S += 2, O++;
        do
          ;
        while (o[++S] == o[++O] && o[++S] == o[++O] && o[++S] == o[++O] && o[++S] == o[++O] && o[++S] == o[++O] && o[++S] == o[++O] && o[++S] == o[++O] && o[++S] == o[++O] && S < St);
        if (F = mt - (St - S), S = St - mt, F > P) {
          if (h = y, P = F, F >= se)
            break;
          nn = o[S + P - 1], rn = o[S + P];
        }
      }
    while ((y = u[y & xe] & 65535) > G && --C !== 0);
    return P <= b ? P : b;
  }
  function $i(y) {
    let C = 0, S;
    for (; ; ) {
      if (b < fe) {
        if (Et(), b < fe && y == 0)
          return ue;
        if (b === 0)
          break;
      }
      if (b >= Y && (m = (m << c ^ o[w + (Y - 1)] & 255) & f, C = p[m] & 65535, u[w & d] = p[m], p[m] = w), C !== 0 && (w - C & 65535) <= s - fe && N != 2 && (_ = tn(C)), _ >= Y)
        if (S = Ke(w - h, _ - Y), b -= _, _ <= T && b >= Y) {
          _--;
          do
            w++, m = (m << c ^ o[w + (Y - 1)] & 255) & f, C = p[m] & 65535, u[w & d] = p[m], p[m] = w;
          while (--_ !== 0);
          w++;
        } else
          w += _, _ = 0, m = o[w] & 255, m = (m << c ^ o[w + 1] & 255) & f;
      else
        S = Ke(0, o[w] & 255), b--, w++;
      if (S && (Se(!1), n.avail_out === 0))
        return ue;
    }
    return Se(y == 4), n.avail_out === 0 ? y == 4 ? Ye : ue : y == 4 ? at : st;
  }
  function Ki(y) {
    let C = 0, S, O;
    for (; ; ) {
      if (b < fe) {
        if (Et(), b < fe && y == 0)
          return ue;
        if (b === 0)
          break;
      }
      if (b >= Y && (m = (m << c ^ o[w + (Y - 1)] & 255) & f, C = p[m] & 65535, u[w & d] = p[m], p[m] = w), E = _, g = h, _ = Y - 1, C !== 0 && E < T && (w - C & 65535) <= s - fe && (N != 2 && (_ = tn(C)), _ <= 5 && (N == 1 || _ == Y && w - h > 4096) && (_ = Y - 1)), E >= Y && _ <= E) {
        O = w + b - Y, S = Ke(w - 1 - g, E - Y), b -= E - 1, E -= 2;
        do
          ++w <= O && (m = (m << c ^ o[w + (Y - 1)] & 255) & f, C = p[m] & 65535, u[w & d] = p[m], p[m] = w);
        while (--E !== 0);
        if (A = 0, _ = Y - 1, w++, S && (Se(!1), n.avail_out === 0))
          return ue;
      } else if (A !== 0) {
        if (S = Ke(0, o[w - 1] & 255), S && Se(!1), w++, b--, n.avail_out === 0)
          return ue;
      } else
        A = 1, w++, b--;
    }
    return A !== 0 && (S = Ke(0, o[w - 1] & 255), A = 0), Se(y == 4), n.avail_out === 0 ? y == 4 ? Ye : ue : y == 4 ? at : st;
  }
  function Yi(y) {
    return y.total_in = y.total_out = 0, y.msg = null, t.pending = 0, t.pending_out = 0, e = ot, r = 0, Ue(), it(), 0;
  }
  t.deflateInit = function(y, C, S, O, F, P) {
    return O || (O = Tt), F || (F = er), P || (P = 0), y.msg = null, C == -1 && (C = 6), F < 1 || F > zi || O != Tt || S < 9 || S > 15 || C < 0 || C > 9 || P < 0 || P > 2 ? -2 : (y.dstate = t, a = S, s = 1 << a, d = s - 1, D = F + 7, v = 1 << D, f = v - 1, c = Math.floor((D + Y - 1) / Y), o = new Uint8Array(s * 2), u = [], p = [], ne = 1 << F + 6, t.pending_buf = new Uint8Array(ne * 4), i = ne * 4, t.dist_buf = new Uint16Array(ne), t.lc_buf = new Uint8Array(ne), k = C, N = P, Yi(y));
  }, t.deflateEnd = function() {
    return e != At && e != ot && e != Ve ? -2 : (t.lc_buf = null, t.dist_buf = null, t.pending_buf = null, p = null, u = null, o = null, t.dstate = null, e == ot ? -3 : 0);
  }, t.deflateParams = function(y, C, S) {
    let O = 0;
    return C == -1 && (C = 6), C < 0 || C > 9 || S < 0 || S > 2 ? -2 : (_e[k].func != _e[C].func && y.total_in !== 0 && (O = y.deflate(1)), k != C && (k = C, T = _e[k].max_lazy, I = _e[k].good_length, M = _e[k].nice_length, R = _e[k].max_chain), N = S, O);
  }, t.deflateSetDictionary = function(y, C, S) {
    let O = S, F, P = 0;
    if (!C || e != At)
      return -2;
    if (O < Y)
      return 0;
    for (O > s - fe && (O = s - fe, P = S - O), o.set(C.subarray(P, P + O), 0), w = O, l = O, m = o[0] & 255, m = (m << c ^ o[1] & 255) & f, F = 0; F <= O - Y; F++)
      m = (m << c ^ o[F + (Y - 1)] & 255) & f, u[F & d] = p[m], p[m] = F;
    return 0;
  }, t.deflate = function(y, C) {
    let S, O, F, P, G;
    if (C > 4 || C < 0)
      return -2;
    if (!y.next_out || !y.next_in && y.avail_in !== 0 || e == Ve && C != 4)
      return y.msg = rt[4], -2;
    if (y.avail_out === 0)
      return y.msg = rt[7], -5;
    if (n = y, P = r, r = C, e == At && (O = Tt + (a - 8 << 4) << 8, F = (k - 1 & 255) >> 1, F > 3 && (F = 3), O |= F << 6, w !== 0 && (O |= tr), O += 31 - O % 31, e = ot, kt(O)), t.pending !== 0) {
      if (n.flush_pending(), n.avail_out === 0)
        return r = -1, 0;
    } else if (n.avail_in === 0 && C <= P && C != 4)
      return n.msg = rt[7], -5;
    if (e == Ve && n.avail_in !== 0)
      return y.msg = rt[7], -5;
    if (n.avail_in !== 0 || b !== 0 || C != 0 && e != Ve) {
      switch (G = -1, _e[k].func) {
        case zn:
          G = Wi(C);
          break;
        case ut:
          G = $i(C);
          break;
        case Le:
          G = Ki(C);
          break;
      }
      if ((G == Ye || G == at) && (e = Ve), G == ue || G == Ye)
        return n.avail_out === 0 && (r = -1), 0;
      if (G == st) {
        if (C == 1)
          Hi();
        else if (en(0, 0, !1), C == 3)
          for (S = 0; S < v; S++)
            p[S] = 0;
        if (n.flush_pending(), n.avail_out === 0)
          return r = -1, 0;
      }
    }
    return C != 4 ? 0 : 1;
  };
}
function ei() {
  const t = this;
  t.next_in_index = 0, t.next_out_index = 0, t.avail_in = 0, t.total_in = 0, t.avail_out = 0, t.total_out = 0;
}
ei.prototype = {
  deflateInit(t, n) {
    const e = this;
    return e.dstate = new rr(), n || (n = 15), e.dstate.deflateInit(e, t, n);
  },
  deflate(t) {
    const n = this;
    return n.dstate ? n.dstate.deflate(n, t) : -2;
  },
  deflateEnd() {
    const t = this;
    if (!t.dstate)
      return -2;
    const n = t.dstate.deflateEnd();
    return t.dstate = null, n;
  },
  deflateParams(t, n) {
    const e = this;
    return e.dstate ? e.dstate.deflateParams(e, t, n) : -2;
  },
  deflateSetDictionary(t, n) {
    const e = this;
    return e.dstate ? e.dstate.deflateSetDictionary(e, t, n) : -2;
  },
  // Read a new buffer from the current input stream, update the
  // total number of bytes read. All deflate() input goes through
  // this function so some applications may wish to modify it to avoid
  // allocating a large strm->next_in buffer and copying from it.
  // (See also flush_pending()).
  read_buf(t, n, e) {
    const i = this;
    let r = i.avail_in;
    return r > e && (r = e), r === 0 ? 0 : (i.avail_in -= r, t.set(i.next_in.subarray(i.next_in_index, i.next_in_index + r), n), i.next_in_index += r, i.total_in += r, r);
  },
  // Flush as much pending output as possible. All deflate() output goes
  // through this function so some applications may wish to modify it
  // to avoid allocating a large strm->next_out buffer and copying into it.
  // (See also read_buf()).
  flush_pending() {
    const t = this;
    let n = t.dstate.pending;
    n > t.avail_out && (n = t.avail_out), n !== 0 && (t.next_out.set(t.dstate.pending_buf.subarray(t.dstate.pending_out, t.dstate.pending_out + n), t.next_out_index), t.next_out_index += n, t.dstate.pending_out += n, t.total_out += n, t.avail_out -= n, t.dstate.pending -= n, t.dstate.pending === 0 && (t.dstate.pending_out = 0));
  }
};
function sr(t) {
  const n = this, e = new ei(), i = ar(t && t.chunkSize ? t.chunkSize : 64 * 1024), r = 0, s = new Uint8Array(i);
  let a = t ? t.level : -1;
  typeof a > "u" && (a = -1), e.deflateInit(a), e.next_out = s, n.append = function(d, o) {
    let x, u, p = 0, m = 0, v = 0;
    const D = [];
    if (d.length) {
      e.next_in_index = 0, e.next_in = d, e.avail_in = d.length;
      do {
        if (e.next_out_index = 0, e.avail_out = i, x = e.deflate(r), x != 0)
          throw new Error("deflating: " + e.msg);
        e.next_out_index && (e.next_out_index == i ? D.push(new Uint8Array(s)) : D.push(s.subarray(0, e.next_out_index))), v += e.next_out_index, o && e.next_in_index > 0 && e.next_in_index != p && (o(e.next_in_index), p = e.next_in_index);
      } while (e.avail_in > 0 || e.avail_out === 0);
      return D.length > 1 ? (u = new Uint8Array(v), D.forEach(function(f) {
        u.set(f, m), m += f.length;
      })) : u = D[0] ? new Uint8Array(D[0]) : new Uint8Array(), u;
    }
  }, n.flush = function() {
    let d, o, x = 0, u = 0;
    const p = [];
    do {
      if (e.next_out_index = 0, e.avail_out = i, d = e.deflate(4), d != 1 && d != 0)
        throw new Error("deflating: " + e.msg);
      i - e.avail_out > 0 && p.push(s.slice(0, e.next_out_index)), u += e.next_out_index;
    } while (e.avail_in > 0 || e.avail_out === 0);
    return e.deflateEnd(), o = new Uint8Array(u), p.forEach(function(m) {
      o.set(m, x), x += m.length;
    }), o;
  };
}
function ar(t) {
  return t + 5 * (Math.floor(t / 16383) + 1);
}
const or = 15, q = 0, ve = 1, cr = 2, le = -2, K = -3, on = -4, ye = -5, de = [
  0,
  1,
  3,
  7,
  15,
  31,
  63,
  127,
  255,
  511,
  1023,
  2047,
  4095,
  8191,
  16383,
  32767,
  65535
], ti = 1440, lr = 0, fr = 4, dr = 9, ur = 5, mr = [
  96,
  7,
  256,
  0,
  8,
  80,
  0,
  8,
  16,
  84,
  8,
  115,
  82,
  7,
  31,
  0,
  8,
  112,
  0,
  8,
  48,
  0,
  9,
  192,
  80,
  7,
  10,
  0,
  8,
  96,
  0,
  8,
  32,
  0,
  9,
  160,
  0,
  8,
  0,
  0,
  8,
  128,
  0,
  8,
  64,
  0,
  9,
  224,
  80,
  7,
  6,
  0,
  8,
  88,
  0,
  8,
  24,
  0,
  9,
  144,
  83,
  7,
  59,
  0,
  8,
  120,
  0,
  8,
  56,
  0,
  9,
  208,
  81,
  7,
  17,
  0,
  8,
  104,
  0,
  8,
  40,
  0,
  9,
  176,
  0,
  8,
  8,
  0,
  8,
  136,
  0,
  8,
  72,
  0,
  9,
  240,
  80,
  7,
  4,
  0,
  8,
  84,
  0,
  8,
  20,
  85,
  8,
  227,
  83,
  7,
  43,
  0,
  8,
  116,
  0,
  8,
  52,
  0,
  9,
  200,
  81,
  7,
  13,
  0,
  8,
  100,
  0,
  8,
  36,
  0,
  9,
  168,
  0,
  8,
  4,
  0,
  8,
  132,
  0,
  8,
  68,
  0,
  9,
  232,
  80,
  7,
  8,
  0,
  8,
  92,
  0,
  8,
  28,
  0,
  9,
  152,
  84,
  7,
  83,
  0,
  8,
  124,
  0,
  8,
  60,
  0,
  9,
  216,
  82,
  7,
  23,
  0,
  8,
  108,
  0,
  8,
  44,
  0,
  9,
  184,
  0,
  8,
  12,
  0,
  8,
  140,
  0,
  8,
  76,
  0,
  9,
  248,
  80,
  7,
  3,
  0,
  8,
  82,
  0,
  8,
  18,
  85,
  8,
  163,
  83,
  7,
  35,
  0,
  8,
  114,
  0,
  8,
  50,
  0,
  9,
  196,
  81,
  7,
  11,
  0,
  8,
  98,
  0,
  8,
  34,
  0,
  9,
  164,
  0,
  8,
  2,
  0,
  8,
  130,
  0,
  8,
  66,
  0,
  9,
  228,
  80,
  7,
  7,
  0,
  8,
  90,
  0,
  8,
  26,
  0,
  9,
  148,
  84,
  7,
  67,
  0,
  8,
  122,
  0,
  8,
  58,
  0,
  9,
  212,
  82,
  7,
  19,
  0,
  8,
  106,
  0,
  8,
  42,
  0,
  9,
  180,
  0,
  8,
  10,
  0,
  8,
  138,
  0,
  8,
  74,
  0,
  9,
  244,
  80,
  7,
  5,
  0,
  8,
  86,
  0,
  8,
  22,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  118,
  0,
  8,
  54,
  0,
  9,
  204,
  81,
  7,
  15,
  0,
  8,
  102,
  0,
  8,
  38,
  0,
  9,
  172,
  0,
  8,
  6,
  0,
  8,
  134,
  0,
  8,
  70,
  0,
  9,
  236,
  80,
  7,
  9,
  0,
  8,
  94,
  0,
  8,
  30,
  0,
  9,
  156,
  84,
  7,
  99,
  0,
  8,
  126,
  0,
  8,
  62,
  0,
  9,
  220,
  82,
  7,
  27,
  0,
  8,
  110,
  0,
  8,
  46,
  0,
  9,
  188,
  0,
  8,
  14,
  0,
  8,
  142,
  0,
  8,
  78,
  0,
  9,
  252,
  96,
  7,
  256,
  0,
  8,
  81,
  0,
  8,
  17,
  85,
  8,
  131,
  82,
  7,
  31,
  0,
  8,
  113,
  0,
  8,
  49,
  0,
  9,
  194,
  80,
  7,
  10,
  0,
  8,
  97,
  0,
  8,
  33,
  0,
  9,
  162,
  0,
  8,
  1,
  0,
  8,
  129,
  0,
  8,
  65,
  0,
  9,
  226,
  80,
  7,
  6,
  0,
  8,
  89,
  0,
  8,
  25,
  0,
  9,
  146,
  83,
  7,
  59,
  0,
  8,
  121,
  0,
  8,
  57,
  0,
  9,
  210,
  81,
  7,
  17,
  0,
  8,
  105,
  0,
  8,
  41,
  0,
  9,
  178,
  0,
  8,
  9,
  0,
  8,
  137,
  0,
  8,
  73,
  0,
  9,
  242,
  80,
  7,
  4,
  0,
  8,
  85,
  0,
  8,
  21,
  80,
  8,
  258,
  83,
  7,
  43,
  0,
  8,
  117,
  0,
  8,
  53,
  0,
  9,
  202,
  81,
  7,
  13,
  0,
  8,
  101,
  0,
  8,
  37,
  0,
  9,
  170,
  0,
  8,
  5,
  0,
  8,
  133,
  0,
  8,
  69,
  0,
  9,
  234,
  80,
  7,
  8,
  0,
  8,
  93,
  0,
  8,
  29,
  0,
  9,
  154,
  84,
  7,
  83,
  0,
  8,
  125,
  0,
  8,
  61,
  0,
  9,
  218,
  82,
  7,
  23,
  0,
  8,
  109,
  0,
  8,
  45,
  0,
  9,
  186,
  0,
  8,
  13,
  0,
  8,
  141,
  0,
  8,
  77,
  0,
  9,
  250,
  80,
  7,
  3,
  0,
  8,
  83,
  0,
  8,
  19,
  85,
  8,
  195,
  83,
  7,
  35,
  0,
  8,
  115,
  0,
  8,
  51,
  0,
  9,
  198,
  81,
  7,
  11,
  0,
  8,
  99,
  0,
  8,
  35,
  0,
  9,
  166,
  0,
  8,
  3,
  0,
  8,
  131,
  0,
  8,
  67,
  0,
  9,
  230,
  80,
  7,
  7,
  0,
  8,
  91,
  0,
  8,
  27,
  0,
  9,
  150,
  84,
  7,
  67,
  0,
  8,
  123,
  0,
  8,
  59,
  0,
  9,
  214,
  82,
  7,
  19,
  0,
  8,
  107,
  0,
  8,
  43,
  0,
  9,
  182,
  0,
  8,
  11,
  0,
  8,
  139,
  0,
  8,
  75,
  0,
  9,
  246,
  80,
  7,
  5,
  0,
  8,
  87,
  0,
  8,
  23,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  119,
  0,
  8,
  55,
  0,
  9,
  206,
  81,
  7,
  15,
  0,
  8,
  103,
  0,
  8,
  39,
  0,
  9,
  174,
  0,
  8,
  7,
  0,
  8,
  135,
  0,
  8,
  71,
  0,
  9,
  238,
  80,
  7,
  9,
  0,
  8,
  95,
  0,
  8,
  31,
  0,
  9,
  158,
  84,
  7,
  99,
  0,
  8,
  127,
  0,
  8,
  63,
  0,
  9,
  222,
  82,
  7,
  27,
  0,
  8,
  111,
  0,
  8,
  47,
  0,
  9,
  190,
  0,
  8,
  15,
  0,
  8,
  143,
  0,
  8,
  79,
  0,
  9,
  254,
  96,
  7,
  256,
  0,
  8,
  80,
  0,
  8,
  16,
  84,
  8,
  115,
  82,
  7,
  31,
  0,
  8,
  112,
  0,
  8,
  48,
  0,
  9,
  193,
  80,
  7,
  10,
  0,
  8,
  96,
  0,
  8,
  32,
  0,
  9,
  161,
  0,
  8,
  0,
  0,
  8,
  128,
  0,
  8,
  64,
  0,
  9,
  225,
  80,
  7,
  6,
  0,
  8,
  88,
  0,
  8,
  24,
  0,
  9,
  145,
  83,
  7,
  59,
  0,
  8,
  120,
  0,
  8,
  56,
  0,
  9,
  209,
  81,
  7,
  17,
  0,
  8,
  104,
  0,
  8,
  40,
  0,
  9,
  177,
  0,
  8,
  8,
  0,
  8,
  136,
  0,
  8,
  72,
  0,
  9,
  241,
  80,
  7,
  4,
  0,
  8,
  84,
  0,
  8,
  20,
  85,
  8,
  227,
  83,
  7,
  43,
  0,
  8,
  116,
  0,
  8,
  52,
  0,
  9,
  201,
  81,
  7,
  13,
  0,
  8,
  100,
  0,
  8,
  36,
  0,
  9,
  169,
  0,
  8,
  4,
  0,
  8,
  132,
  0,
  8,
  68,
  0,
  9,
  233,
  80,
  7,
  8,
  0,
  8,
  92,
  0,
  8,
  28,
  0,
  9,
  153,
  84,
  7,
  83,
  0,
  8,
  124,
  0,
  8,
  60,
  0,
  9,
  217,
  82,
  7,
  23,
  0,
  8,
  108,
  0,
  8,
  44,
  0,
  9,
  185,
  0,
  8,
  12,
  0,
  8,
  140,
  0,
  8,
  76,
  0,
  9,
  249,
  80,
  7,
  3,
  0,
  8,
  82,
  0,
  8,
  18,
  85,
  8,
  163,
  83,
  7,
  35,
  0,
  8,
  114,
  0,
  8,
  50,
  0,
  9,
  197,
  81,
  7,
  11,
  0,
  8,
  98,
  0,
  8,
  34,
  0,
  9,
  165,
  0,
  8,
  2,
  0,
  8,
  130,
  0,
  8,
  66,
  0,
  9,
  229,
  80,
  7,
  7,
  0,
  8,
  90,
  0,
  8,
  26,
  0,
  9,
  149,
  84,
  7,
  67,
  0,
  8,
  122,
  0,
  8,
  58,
  0,
  9,
  213,
  82,
  7,
  19,
  0,
  8,
  106,
  0,
  8,
  42,
  0,
  9,
  181,
  0,
  8,
  10,
  0,
  8,
  138,
  0,
  8,
  74,
  0,
  9,
  245,
  80,
  7,
  5,
  0,
  8,
  86,
  0,
  8,
  22,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  118,
  0,
  8,
  54,
  0,
  9,
  205,
  81,
  7,
  15,
  0,
  8,
  102,
  0,
  8,
  38,
  0,
  9,
  173,
  0,
  8,
  6,
  0,
  8,
  134,
  0,
  8,
  70,
  0,
  9,
  237,
  80,
  7,
  9,
  0,
  8,
  94,
  0,
  8,
  30,
  0,
  9,
  157,
  84,
  7,
  99,
  0,
  8,
  126,
  0,
  8,
  62,
  0,
  9,
  221,
  82,
  7,
  27,
  0,
  8,
  110,
  0,
  8,
  46,
  0,
  9,
  189,
  0,
  8,
  14,
  0,
  8,
  142,
  0,
  8,
  78,
  0,
  9,
  253,
  96,
  7,
  256,
  0,
  8,
  81,
  0,
  8,
  17,
  85,
  8,
  131,
  82,
  7,
  31,
  0,
  8,
  113,
  0,
  8,
  49,
  0,
  9,
  195,
  80,
  7,
  10,
  0,
  8,
  97,
  0,
  8,
  33,
  0,
  9,
  163,
  0,
  8,
  1,
  0,
  8,
  129,
  0,
  8,
  65,
  0,
  9,
  227,
  80,
  7,
  6,
  0,
  8,
  89,
  0,
  8,
  25,
  0,
  9,
  147,
  83,
  7,
  59,
  0,
  8,
  121,
  0,
  8,
  57,
  0,
  9,
  211,
  81,
  7,
  17,
  0,
  8,
  105,
  0,
  8,
  41,
  0,
  9,
  179,
  0,
  8,
  9,
  0,
  8,
  137,
  0,
  8,
  73,
  0,
  9,
  243,
  80,
  7,
  4,
  0,
  8,
  85,
  0,
  8,
  21,
  80,
  8,
  258,
  83,
  7,
  43,
  0,
  8,
  117,
  0,
  8,
  53,
  0,
  9,
  203,
  81,
  7,
  13,
  0,
  8,
  101,
  0,
  8,
  37,
  0,
  9,
  171,
  0,
  8,
  5,
  0,
  8,
  133,
  0,
  8,
  69,
  0,
  9,
  235,
  80,
  7,
  8,
  0,
  8,
  93,
  0,
  8,
  29,
  0,
  9,
  155,
  84,
  7,
  83,
  0,
  8,
  125,
  0,
  8,
  61,
  0,
  9,
  219,
  82,
  7,
  23,
  0,
  8,
  109,
  0,
  8,
  45,
  0,
  9,
  187,
  0,
  8,
  13,
  0,
  8,
  141,
  0,
  8,
  77,
  0,
  9,
  251,
  80,
  7,
  3,
  0,
  8,
  83,
  0,
  8,
  19,
  85,
  8,
  195,
  83,
  7,
  35,
  0,
  8,
  115,
  0,
  8,
  51,
  0,
  9,
  199,
  81,
  7,
  11,
  0,
  8,
  99,
  0,
  8,
  35,
  0,
  9,
  167,
  0,
  8,
  3,
  0,
  8,
  131,
  0,
  8,
  67,
  0,
  9,
  231,
  80,
  7,
  7,
  0,
  8,
  91,
  0,
  8,
  27,
  0,
  9,
  151,
  84,
  7,
  67,
  0,
  8,
  123,
  0,
  8,
  59,
  0,
  9,
  215,
  82,
  7,
  19,
  0,
  8,
  107,
  0,
  8,
  43,
  0,
  9,
  183,
  0,
  8,
  11,
  0,
  8,
  139,
  0,
  8,
  75,
  0,
  9,
  247,
  80,
  7,
  5,
  0,
  8,
  87,
  0,
  8,
  23,
  192,
  8,
  0,
  83,
  7,
  51,
  0,
  8,
  119,
  0,
  8,
  55,
  0,
  9,
  207,
  81,
  7,
  15,
  0,
  8,
  103,
  0,
  8,
  39,
  0,
  9,
  175,
  0,
  8,
  7,
  0,
  8,
  135,
  0,
  8,
  71,
  0,
  9,
  239,
  80,
  7,
  9,
  0,
  8,
  95,
  0,
  8,
  31,
  0,
  9,
  159,
  84,
  7,
  99,
  0,
  8,
  127,
  0,
  8,
  63,
  0,
  9,
  223,
  82,
  7,
  27,
  0,
  8,
  111,
  0,
  8,
  47,
  0,
  9,
  191,
  0,
  8,
  15,
  0,
  8,
  143,
  0,
  8,
  79,
  0,
  9,
  255
], pr = [
  80,
  5,
  1,
  87,
  5,
  257,
  83,
  5,
  17,
  91,
  5,
  4097,
  81,
  5,
  5,
  89,
  5,
  1025,
  85,
  5,
  65,
  93,
  5,
  16385,
  80,
  5,
  3,
  88,
  5,
  513,
  84,
  5,
  33,
  92,
  5,
  8193,
  82,
  5,
  9,
  90,
  5,
  2049,
  86,
  5,
  129,
  192,
  5,
  24577,
  80,
  5,
  2,
  87,
  5,
  385,
  83,
  5,
  25,
  91,
  5,
  6145,
  81,
  5,
  7,
  89,
  5,
  1537,
  85,
  5,
  97,
  93,
  5,
  24577,
  80,
  5,
  4,
  88,
  5,
  769,
  84,
  5,
  49,
  92,
  5,
  12289,
  82,
  5,
  13,
  90,
  5,
  3073,
  86,
  5,
  193,
  192,
  5,
  24577
], xr = [
  // Copy lengths for literal codes 257..285
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
], _r = [
  // Extra bits for literal codes 257..285
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  112,
  112
  // 112==invalid
], hr = [
  // Copy offsets for distance codes 0..29
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577
], wr = [
  // Extra bits for distance codes
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13
], Ae = 15;
function Zt() {
  const t = this;
  let n, e, i, r, s, a;
  function d(x, u, p, m, v, D, f, c, l, _, g) {
    let A, w, h, b, E, R, T, k, N, I, M, j, L, B, H;
    I = 0, E = p;
    do
      i[x[u + I]]++, I++, E--;
    while (E !== 0);
    if (i[0] == p)
      return f[0] = -1, c[0] = 0, q;
    for (k = c[0], R = 1; R <= Ae && i[R] === 0; R++)
      ;
    for (T = R, k < R && (k = R), E = Ae; E !== 0 && i[E] === 0; E--)
      ;
    for (h = E, k > E && (k = E), c[0] = k, B = 1 << R; R < E; R++, B <<= 1)
      if ((B -= i[R]) < 0)
        return K;
    if ((B -= i[E]) < 0)
      return K;
    for (i[E] += B, a[1] = R = 0, I = 1, L = 2; --E !== 0; )
      a[L] = R += i[I], L++, I++;
    E = 0, I = 0;
    do
      (R = x[u + I]) !== 0 && (g[a[R]++] = E), I++;
    while (++E < p);
    for (p = a[h], a[0] = E = 0, I = 0, b = -1, j = -k, s[0] = 0, M = 0, H = 0; T <= h; T++)
      for (A = i[T]; A-- !== 0; ) {
        for (; T > j + k; ) {
          if (b++, j += k, H = h - j, H = H > k ? k : H, (w = 1 << (R = T - j)) > A + 1 && (w -= A + 1, L = T, R < H))
            for (; ++R < H && !((w <<= 1) <= i[++L]); )
              w -= i[L];
          if (H = 1 << R, _[0] + H > ti)
            return K;
          s[b] = M = /* hp+ */
          _[0], _[0] += H, b !== 0 ? (a[b] = E, r[0] = /* (byte) */
          R, r[1] = /* (byte) */
          k, R = E >>> j - k, r[2] = /* (int) */
          M - s[b - 1] - R, l.set(r, (s[b - 1] + R) * 3)) : f[0] = M;
        }
        for (r[1] = /* (byte) */
        T - j, I >= p ? r[0] = 192 : g[I] < m ? (r[0] = /* (byte) */
        g[I] < 256 ? 0 : 96, r[2] = g[I++]) : (r[0] = /* (byte) */
        D[g[I] - m] + 16 + 64, r[2] = v[g[I++] - m]), w = 1 << T - j, R = E >>> j; R < H; R += w)
          l.set(r, (M + R) * 3);
        for (R = 1 << T - 1; E & R; R >>>= 1)
          E ^= R;
        for (E ^= R, N = (1 << j) - 1; (E & N) != a[b]; )
          b--, j -= k, N = (1 << j) - 1;
      }
    return B !== 0 && h != 1 ? ye : q;
  }
  function o(x) {
    let u;
    for (n || (n = [], e = [], i = new Int32Array(Ae + 1), r = [], s = new Int32Array(Ae), a = new Int32Array(Ae + 1)), e.length < x && (e = []), u = 0; u < x; u++)
      e[u] = 0;
    for (u = 0; u < Ae + 1; u++)
      i[u] = 0;
    for (u = 0; u < 3; u++)
      r[u] = 0;
    s.set(i.subarray(0, Ae), 0), a.set(i.subarray(0, Ae + 1), 0);
  }
  t.inflate_trees_bits = function(x, u, p, m, v) {
    let D;
    return o(19), n[0] = 0, D = d(x, 0, 19, 19, null, null, p, u, m, n, e), D == K ? v.msg = "oversubscribed dynamic bit lengths tree" : (D == ye || u[0] === 0) && (v.msg = "incomplete dynamic bit lengths tree", D = K), D;
  }, t.inflate_trees_dynamic = function(x, u, p, m, v, D, f, c, l) {
    let _;
    return o(288), n[0] = 0, _ = d(p, 0, x, 257, xr, _r, D, m, c, n, e), _ != q || m[0] === 0 ? (_ == K ? l.msg = "oversubscribed literal/length tree" : _ != on && (l.msg = "incomplete literal/length tree", _ = K), _) : (o(288), _ = d(p, x, u, 0, hr, wr, f, v, c, n, e), _ != q || v[0] === 0 && x > 257 ? (_ == K ? l.msg = "oversubscribed distance tree" : _ == ye ? (l.msg = "incomplete distance tree", _ = K) : _ != on && (l.msg = "empty distance tree with lengths", _ = K), _) : q);
  };
}
Zt.inflate_trees_fixed = function(t, n, e, i) {
  return t[0] = dr, n[0] = ur, e[0] = mr, i[0] = pr, q;
};
const ct = 0, cn = 1, ln = 2, fn = 3, dn = 4, un = 5, mn = 6, Ct = 7, pn = 8, lt = 9;
function br() {
  const t = this;
  let n, e = 0, i, r = 0, s = 0, a = 0, d = 0, o = 0, x = 0, u = 0, p, m = 0, v, D = 0;
  function f(c, l, _, g, A, w, h, b) {
    let E, R, T, k, N, I, M, j, L, B, H, ee, U, ne, Z, W;
    M = b.next_in_index, j = b.avail_in, N = h.bitb, I = h.bitk, L = h.write, B = L < h.read ? h.read - L - 1 : h.end - L, H = de[c], ee = de[l];
    do {
      for (; I < 20; )
        j--, N |= (b.read_byte(M++) & 255) << I, I += 8;
      if (E = N & H, R = _, T = g, W = (T + E) * 3, (k = R[W]) === 0) {
        N >>= R[W + 1], I -= R[W + 1], h.win[L++] = /* (byte) */
        R[W + 2], B--;
        continue;
      }
      do {
        if (N >>= R[W + 1], I -= R[W + 1], k & 16) {
          for (k &= 15, U = R[W + 2] + /* (int) */
          (N & de[k]), N >>= k, I -= k; I < 15; )
            j--, N |= (b.read_byte(M++) & 255) << I, I += 8;
          E = N & ee, R = A, T = w, W = (T + E) * 3, k = R[W];
          do
            if (N >>= R[W + 1], I -= R[W + 1], k & 16) {
              for (k &= 15; I < k; )
                j--, N |= (b.read_byte(M++) & 255) << I, I += 8;
              if (ne = R[W + 2] + (N & de[k]), N >>= k, I -= k, B -= U, L >= ne)
                Z = L - ne, L - Z > 0 && 2 > L - Z ? (h.win[L++] = h.win[Z++], h.win[L++] = h.win[Z++], U -= 2) : (h.win.set(h.win.subarray(Z, Z + 2), L), L += 2, Z += 2, U -= 2);
              else {
                Z = L - ne;
                do
                  Z += h.end;
                while (Z < 0);
                if (k = h.end - Z, U > k) {
                  if (U -= k, L - Z > 0 && k > L - Z)
                    do
                      h.win[L++] = h.win[Z++];
                    while (--k !== 0);
                  else
                    h.win.set(h.win.subarray(Z, Z + k), L), L += k, Z += k, k = 0;
                  Z = 0;
                }
              }
              if (L - Z > 0 && U > L - Z)
                do
                  h.win[L++] = h.win[Z++];
                while (--U !== 0);
              else
                h.win.set(h.win.subarray(Z, Z + U), L), L += U, Z += U, U = 0;
              break;
            } else if (!(k & 64))
              E += R[W + 2], E += N & de[k], W = (T + E) * 3, k = R[W];
            else
              return b.msg = "invalid distance code", U = b.avail_in - j, U = I >> 3 < U ? I >> 3 : U, j += U, M -= U, I -= U << 3, h.bitb = N, h.bitk = I, b.avail_in = j, b.total_in += M - b.next_in_index, b.next_in_index = M, h.write = L, K;
          while (!0);
          break;
        }
        if (k & 64)
          return k & 32 ? (U = b.avail_in - j, U = I >> 3 < U ? I >> 3 : U, j += U, M -= U, I -= U << 3, h.bitb = N, h.bitk = I, b.avail_in = j, b.total_in += M - b.next_in_index, b.next_in_index = M, h.write = L, ve) : (b.msg = "invalid literal/length code", U = b.avail_in - j, U = I >> 3 < U ? I >> 3 : U, j += U, M -= U, I -= U << 3, h.bitb = N, h.bitk = I, b.avail_in = j, b.total_in += M - b.next_in_index, b.next_in_index = M, h.write = L, K);
        if (E += R[W + 2], E += N & de[k], W = (T + E) * 3, (k = R[W]) === 0) {
          N >>= R[W + 1], I -= R[W + 1], h.win[L++] = /* (byte) */
          R[W + 2], B--;
          break;
        }
      } while (!0);
    } while (B >= 258 && j >= 10);
    return U = b.avail_in - j, U = I >> 3 < U ? I >> 3 : U, j += U, M -= U, I -= U << 3, h.bitb = N, h.bitk = I, b.avail_in = j, b.total_in += M - b.next_in_index, b.next_in_index = M, h.write = L, q;
  }
  t.init = function(c, l, _, g, A, w) {
    n = ct, x = /* (byte) */
    c, u = /* (byte) */
    l, p = _, m = g, v = A, D = w, i = null;
  }, t.proc = function(c, l, _) {
    let g, A, w, h = 0, b = 0, E = 0, R, T, k, N;
    for (E = l.next_in_index, R = l.avail_in, h = c.bitb, b = c.bitk, T = c.write, k = T < c.read ? c.read - T - 1 : c.end - T; ; )
      switch (n) {
        case ct:
          if (k >= 258 && R >= 10 && (c.bitb = h, c.bitk = b, l.avail_in = R, l.total_in += E - l.next_in_index, l.next_in_index = E, c.write = T, _ = f(x, u, p, m, v, D, c, l), E = l.next_in_index, R = l.avail_in, h = c.bitb, b = c.bitk, T = c.write, k = T < c.read ? c.read - T - 1 : c.end - T, _ != q)) {
            n = _ == ve ? Ct : lt;
            break;
          }
          s = x, i = p, r = m, n = cn;
        case cn:
          for (g = s; b < g; ) {
            if (R !== 0)
              _ = q;
            else
              return c.bitb = h, c.bitk = b, l.avail_in = R, l.total_in += E - l.next_in_index, l.next_in_index = E, c.write = T, c.inflate_flush(l, _);
            R--, h |= (l.read_byte(E++) & 255) << b, b += 8;
          }
          if (A = (r + (h & de[g])) * 3, h >>>= i[A + 1], b -= i[A + 1], w = i[A], w === 0) {
            a = i[A + 2], n = mn;
            break;
          }
          if (w & 16) {
            d = w & 15, e = i[A + 2], n = ln;
            break;
          }
          if (!(w & 64)) {
            s = w, r = A / 3 + i[A + 2];
            break;
          }
          if (w & 32) {
            n = Ct;
            break;
          }
          return n = lt, l.msg = "invalid literal/length code", _ = K, c.bitb = h, c.bitk = b, l.avail_in = R, l.total_in += E - l.next_in_index, l.next_in_index = E, c.write = T, c.inflate_flush(l, _);
        case ln:
          for (g = d; b < g; ) {
            if (R !== 0)
              _ = q;
            else
              return c.bitb = h, c.bitk = b, l.avail_in = R, l.total_in += E - l.next_in_index, l.next_in_index = E, c.write = T, c.inflate_flush(l, _);
            R--, h |= (l.read_byte(E++) & 255) << b, b += 8;
          }
          e += h & de[g], h >>= g, b -= g, s = u, i = v, r = D, n = fn;
        case fn:
          for (g = s; b < g; ) {
            if (R !== 0)
              _ = q;
            else
              return c.bitb = h, c.bitk = b, l.avail_in = R, l.total_in += E - l.next_in_index, l.next_in_index = E, c.write = T, c.inflate_flush(l, _);
            R--, h |= (l.read_byte(E++) & 255) << b, b += 8;
          }
          if (A = (r + (h & de[g])) * 3, h >>= i[A + 1], b -= i[A + 1], w = i[A], w & 16) {
            d = w & 15, o = i[A + 2], n = dn;
            break;
          }
          if (!(w & 64)) {
            s = w, r = A / 3 + i[A + 2];
            break;
          }
          return n = lt, l.msg = "invalid distance code", _ = K, c.bitb = h, c.bitk = b, l.avail_in = R, l.total_in += E - l.next_in_index, l.next_in_index = E, c.write = T, c.inflate_flush(l, _);
        case dn:
          for (g = d; b < g; ) {
            if (R !== 0)
              _ = q;
            else
              return c.bitb = h, c.bitk = b, l.avail_in = R, l.total_in += E - l.next_in_index, l.next_in_index = E, c.write = T, c.inflate_flush(l, _);
            R--, h |= (l.read_byte(E++) & 255) << b, b += 8;
          }
          o += h & de[g], h >>= g, b -= g, n = un;
        case un:
          for (N = T - o; N < 0; )
            N += c.end;
          for (; e !== 0; ) {
            if (k === 0 && (T == c.end && c.read !== 0 && (T = 0, k = T < c.read ? c.read - T - 1 : c.end - T), k === 0 && (c.write = T, _ = c.inflate_flush(l, _), T = c.write, k = T < c.read ? c.read - T - 1 : c.end - T, T == c.end && c.read !== 0 && (T = 0, k = T < c.read ? c.read - T - 1 : c.end - T), k === 0)))
              return c.bitb = h, c.bitk = b, l.avail_in = R, l.total_in += E - l.next_in_index, l.next_in_index = E, c.write = T, c.inflate_flush(l, _);
            c.win[T++] = c.win[N++], k--, N == c.end && (N = 0), e--;
          }
          n = ct;
          break;
        case mn:
          if (k === 0 && (T == c.end && c.read !== 0 && (T = 0, k = T < c.read ? c.read - T - 1 : c.end - T), k === 0 && (c.write = T, _ = c.inflate_flush(l, _), T = c.write, k = T < c.read ? c.read - T - 1 : c.end - T, T == c.end && c.read !== 0 && (T = 0, k = T < c.read ? c.read - T - 1 : c.end - T), k === 0)))
            return c.bitb = h, c.bitk = b, l.avail_in = R, l.total_in += E - l.next_in_index, l.next_in_index = E, c.write = T, c.inflate_flush(l, _);
          _ = q, c.win[T++] = /* (byte) */
          a, k--, n = ct;
          break;
        case Ct:
          if (b > 7 && (b -= 8, R++, E--), c.write = T, _ = c.inflate_flush(l, _), T = c.write, k = T < c.read ? c.read - T - 1 : c.end - T, c.read != c.write)
            return c.bitb = h, c.bitk = b, l.avail_in = R, l.total_in += E - l.next_in_index, l.next_in_index = E, c.write = T, c.inflate_flush(l, _);
          n = pn;
        case pn:
          return _ = ve, c.bitb = h, c.bitk = b, l.avail_in = R, l.total_in += E - l.next_in_index, l.next_in_index = E, c.write = T, c.inflate_flush(l, _);
        case lt:
          return _ = K, c.bitb = h, c.bitk = b, l.avail_in = R, l.total_in += E - l.next_in_index, l.next_in_index = E, c.write = T, c.inflate_flush(l, _);
        default:
          return _ = le, c.bitb = h, c.bitk = b, l.avail_in = R, l.total_in += E - l.next_in_index, l.next_in_index = E, c.write = T, c.inflate_flush(l, _);
      }
  }, t.free = function() {
  };
}
const xn = [
  // Order of the bit length code lengths
  16,
  17,
  18,
  0,
  8,
  7,
  9,
  6,
  10,
  5,
  11,
  4,
  12,
  3,
  13,
  2,
  14,
  1,
  15
], Ze = 0, Ot = 1, _n = 2, hn = 3, wn = 4, bn = 5, ft = 6, dt = 7, gn = 8, Fe = 9;
function gr(t, n) {
  const e = this;
  let i = Ze, r = 0, s = 0, a = 0, d;
  const o = [0], x = [0], u = new br();
  let p = 0, m = new Int32Array(ti * 3);
  const v = 0, D = new Zt();
  e.bitk = 0, e.bitb = 0, e.win = new Uint8Array(n), e.end = n, e.read = 0, e.write = 0, e.reset = function(f, c) {
    c && (c[0] = v), i == ft && u.free(f), i = Ze, e.bitk = 0, e.bitb = 0, e.read = e.write = 0;
  }, e.reset(t, null), e.inflate_flush = function(f, c) {
    let l, _, g;
    return _ = f.next_out_index, g = e.read, l = /* (int) */
    (g <= e.write ? e.write : e.end) - g, l > f.avail_out && (l = f.avail_out), l !== 0 && c == ye && (c = q), f.avail_out -= l, f.total_out += l, f.next_out.set(e.win.subarray(g, g + l), _), _ += l, g += l, g == e.end && (g = 0, e.write == e.end && (e.write = 0), l = e.write - g, l > f.avail_out && (l = f.avail_out), l !== 0 && c == ye && (c = q), f.avail_out -= l, f.total_out += l, f.next_out.set(e.win.subarray(g, g + l), _), _ += l, g += l), f.next_out_index = _, e.read = g, c;
  }, e.proc = function(f, c) {
    let l, _, g, A, w, h, b, E;
    for (A = f.next_in_index, w = f.avail_in, _ = e.bitb, g = e.bitk, h = e.write, b = /* (int) */
    h < e.read ? e.read - h - 1 : e.end - h; ; ) {
      let R, T, k, N, I, M, j, L;
      switch (i) {
        case Ze:
          for (; g < 3; ) {
            if (w !== 0)
              c = q;
            else
              return e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
            w--, _ |= (f.read_byte(A++) & 255) << g, g += 8;
          }
          switch (l = /* (int) */
          _ & 7, p = l & 1, l >>> 1) {
            case 0:
              _ >>>= 3, g -= 3, l = g & 7, _ >>>= l, g -= l, i = Ot;
              break;
            case 1:
              R = [], T = [], k = [[]], N = [[]], Zt.inflate_trees_fixed(R, T, k, N), u.init(R[0], T[0], k[0], 0, N[0], 0), _ >>>= 3, g -= 3, i = ft;
              break;
            case 2:
              _ >>>= 3, g -= 3, i = hn;
              break;
            case 3:
              return _ >>>= 3, g -= 3, i = Fe, f.msg = "invalid block type", c = K, e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
          }
          break;
        case Ot:
          for (; g < 32; ) {
            if (w !== 0)
              c = q;
            else
              return e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
            w--, _ |= (f.read_byte(A++) & 255) << g, g += 8;
          }
          if ((~_ >>> 16 & 65535) != (_ & 65535))
            return i = Fe, f.msg = "invalid stored block lengths", c = K, e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
          r = _ & 65535, _ = g = 0, i = r !== 0 ? _n : p !== 0 ? dt : Ze;
          break;
        case _n:
          if (w === 0 || b === 0 && (h == e.end && e.read !== 0 && (h = 0, b = /* (int) */
          h < e.read ? e.read - h - 1 : e.end - h), b === 0 && (e.write = h, c = e.inflate_flush(f, c), h = e.write, b = /* (int) */
          h < e.read ? e.read - h - 1 : e.end - h, h == e.end && e.read !== 0 && (h = 0, b = /* (int) */
          h < e.read ? e.read - h - 1 : e.end - h), b === 0)))
            return e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
          if (c = q, l = r, l > w && (l = w), l > b && (l = b), e.win.set(f.read_buf(A, l), h), A += l, w -= l, h += l, b -= l, (r -= l) !== 0)
            break;
          i = p !== 0 ? dt : Ze;
          break;
        case hn:
          for (; g < 14; ) {
            if (w !== 0)
              c = q;
            else
              return e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
            w--, _ |= (f.read_byte(A++) & 255) << g, g += 8;
          }
          if (s = l = _ & 16383, (l & 31) > 29 || (l >> 5 & 31) > 29)
            return i = Fe, f.msg = "too many length or distance symbols", c = K, e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
          if (l = 258 + (l & 31) + (l >> 5 & 31), !d || d.length < l)
            d = [];
          else
            for (E = 0; E < l; E++)
              d[E] = 0;
          _ >>>= 14, g -= 14, a = 0, i = wn;
        case wn:
          for (; a < 4 + (s >>> 10); ) {
            for (; g < 3; ) {
              if (w !== 0)
                c = q;
              else
                return e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
              w--, _ |= (f.read_byte(A++) & 255) << g, g += 8;
            }
            d[xn[a++]] = _ & 7, _ >>>= 3, g -= 3;
          }
          for (; a < 19; )
            d[xn[a++]] = 0;
          if (o[0] = 7, l = D.inflate_trees_bits(d, o, x, m, f), l != q)
            return c = l, c == K && (d = null, i = Fe), e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
          a = 0, i = bn;
        case bn:
          for (; l = s, !(a >= 258 + (l & 31) + (l >> 5 & 31)); ) {
            let B, H;
            for (l = o[0]; g < l; ) {
              if (w !== 0)
                c = q;
              else
                return e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
              w--, _ |= (f.read_byte(A++) & 255) << g, g += 8;
            }
            if (l = m[(x[0] + (_ & de[l])) * 3 + 1], H = m[(x[0] + (_ & de[l])) * 3 + 2], H < 16)
              _ >>>= l, g -= l, d[a++] = H;
            else {
              for (E = H == 18 ? 7 : H - 14, B = H == 18 ? 11 : 3; g < l + E; ) {
                if (w !== 0)
                  c = q;
                else
                  return e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
                w--, _ |= (f.read_byte(A++) & 255) << g, g += 8;
              }
              if (_ >>>= l, g -= l, B += _ & de[E], _ >>>= E, g -= E, E = a, l = s, E + B > 258 + (l & 31) + (l >> 5 & 31) || H == 16 && E < 1)
                return d = null, i = Fe, f.msg = "invalid bit length repeat", c = K, e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
              H = H == 16 ? d[E - 1] : 0;
              do
                d[E++] = H;
              while (--B !== 0);
              a = E;
            }
          }
          if (x[0] = -1, I = [], M = [], j = [], L = [], I[0] = 9, M[0] = 6, l = s, l = D.inflate_trees_dynamic(257 + (l & 31), 1 + (l >> 5 & 31), d, I, M, j, L, m, f), l != q)
            return l == K && (d = null, i = Fe), c = l, e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
          u.init(I[0], M[0], m, j[0], m, L[0]), i = ft;
        case ft:
          if (e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, (c = u.proc(e, f, c)) != ve)
            return e.inflate_flush(f, c);
          if (c = q, u.free(f), A = f.next_in_index, w = f.avail_in, _ = e.bitb, g = e.bitk, h = e.write, b = /* (int) */
          h < e.read ? e.read - h - 1 : e.end - h, p === 0) {
            i = Ze;
            break;
          }
          i = dt;
        case dt:
          if (e.write = h, c = e.inflate_flush(f, c), h = e.write, b = /* (int) */
          h < e.read ? e.read - h - 1 : e.end - h, e.read != e.write)
            return e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
          i = gn;
        case gn:
          return c = ve, e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
        case Fe:
          return c = K, e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
        default:
          return c = le, e.bitb = _, e.bitk = g, f.avail_in = w, f.total_in += A - f.next_in_index, f.next_in_index = A, e.write = h, e.inflate_flush(f, c);
      }
    }
  }, e.free = function(f) {
    e.reset(f, null), e.win = null, m = null;
  }, e.set_dictionary = function(f, c, l) {
    e.win.set(f.subarray(c, c + l), 0), e.read = e.write = l;
  }, e.sync_point = function() {
    return i == Ot ? 1 : 0;
  };
}
const vr = 32, yr = 8, kr = 0, vn = 1, yn = 2, kn = 3, En = 4, Sn = 5, Dt = 6, Xe = 7, An = 12, Te = 13, Er = [0, 0, 255, 255];
function Sr() {
  const t = this;
  t.mode = 0, t.method = 0, t.was = [0], t.need = 0, t.marker = 0, t.wbits = 0;
  function n(e) {
    return !e || !e.istate ? le : (e.total_in = e.total_out = 0, e.msg = null, e.istate.mode = Xe, e.istate.blocks.reset(e, null), q);
  }
  t.inflateEnd = function(e) {
    return t.blocks && t.blocks.free(e), t.blocks = null, q;
  }, t.inflateInit = function(e, i) {
    return e.msg = null, t.blocks = null, i < 8 || i > 15 ? (t.inflateEnd(e), le) : (t.wbits = i, e.istate.blocks = new gr(e, 1 << i), n(e), q);
  }, t.inflate = function(e, i) {
    let r, s;
    if (!e || !e.istate || !e.next_in)
      return le;
    const a = e.istate;
    for (i = i == fr ? ye : q, r = ye; ; )
      switch (a.mode) {
        case kr:
          if (e.avail_in === 0)
            return r;
          if (r = i, e.avail_in--, e.total_in++, ((a.method = e.read_byte(e.next_in_index++)) & 15) != yr) {
            a.mode = Te, e.msg = "unknown compression method", a.marker = 5;
            break;
          }
          if ((a.method >> 4) + 8 > a.wbits) {
            a.mode = Te, e.msg = "invalid win size", a.marker = 5;
            break;
          }
          a.mode = vn;
        case vn:
          if (e.avail_in === 0)
            return r;
          if (r = i, e.avail_in--, e.total_in++, s = e.read_byte(e.next_in_index++) & 255, ((a.method << 8) + s) % 31 !== 0) {
            a.mode = Te, e.msg = "incorrect header check", a.marker = 5;
            break;
          }
          if (!(s & vr)) {
            a.mode = Xe;
            break;
          }
          a.mode = yn;
        case yn:
          if (e.avail_in === 0)
            return r;
          r = i, e.avail_in--, e.total_in++, a.need = (e.read_byte(e.next_in_index++) & 255) << 24 & 4278190080, a.mode = kn;
        case kn:
          if (e.avail_in === 0)
            return r;
          r = i, e.avail_in--, e.total_in++, a.need += (e.read_byte(e.next_in_index++) & 255) << 16 & 16711680, a.mode = En;
        case En:
          if (e.avail_in === 0)
            return r;
          r = i, e.avail_in--, e.total_in++, a.need += (e.read_byte(e.next_in_index++) & 255) << 8 & 65280, a.mode = Sn;
        case Sn:
          return e.avail_in === 0 ? r : (r = i, e.avail_in--, e.total_in++, a.need += e.read_byte(e.next_in_index++) & 255, a.mode = Dt, cr);
        case Dt:
          return a.mode = Te, e.msg = "need dictionary", a.marker = 0, le;
        case Xe:
          if (r = a.blocks.proc(e, r), r == K) {
            a.mode = Te, a.marker = 0;
            break;
          }
          if (r == q && (r = i), r != ve)
            return r;
          r = i, a.blocks.reset(e, a.was), a.mode = An;
        case An:
          return e.avail_in = 0, ve;
        case Te:
          return K;
        default:
          return le;
      }
  }, t.inflateSetDictionary = function(e, i, r) {
    let s = 0, a = r;
    if (!e || !e.istate || e.istate.mode != Dt)
      return le;
    const d = e.istate;
    return a >= 1 << d.wbits && (a = (1 << d.wbits) - 1, s = r - a), d.blocks.set_dictionary(i, s, a), d.mode = Xe, q;
  }, t.inflateSync = function(e) {
    let i, r, s, a, d;
    if (!e || !e.istate)
      return le;
    const o = e.istate;
    if (o.mode != Te && (o.mode = Te, o.marker = 0), (i = e.avail_in) === 0)
      return ye;
    for (r = e.next_in_index, s = o.marker; i !== 0 && s < 4; )
      e.read_byte(r) == Er[s] ? s++ : e.read_byte(r) !== 0 ? s = 0 : s = 4 - s, r++, i--;
    return e.total_in += r - e.next_in_index, e.next_in_index = r, e.avail_in = i, o.marker = s, s != 4 ? K : (a = e.total_in, d = e.total_out, n(e), e.total_in = a, e.total_out = d, o.mode = Xe, q);
  }, t.inflateSyncPoint = function(e) {
    return !e || !e.istate || !e.istate.blocks ? le : e.istate.blocks.sync_point();
  };
}
function ni() {
}
ni.prototype = {
  inflateInit(t) {
    const n = this;
    return n.istate = new Sr(), t || (t = or), n.istate.inflateInit(n, t);
  },
  inflate(t) {
    const n = this;
    return n.istate ? n.istate.inflate(n, t) : le;
  },
  inflateEnd() {
    const t = this;
    if (!t.istate)
      return le;
    const n = t.istate.inflateEnd(t);
    return t.istate = null, n;
  },
  inflateSync() {
    const t = this;
    return t.istate ? t.istate.inflateSync(t) : le;
  },
  inflateSetDictionary(t, n) {
    const e = this;
    return e.istate ? e.istate.inflateSetDictionary(e, t, n) : le;
  },
  read_byte(t) {
    return this.next_in[t];
  },
  read_buf(t, n) {
    return this.next_in.subarray(t, t + n);
  }
};
function Ar(t) {
  const n = this, e = new ni(), i = t && t.chunkSize ? Math.floor(t.chunkSize * 2) : 128 * 1024, r = lr, s = new Uint8Array(i);
  let a = !1;
  e.inflateInit(), e.next_out = s, n.append = function(d, o) {
    const x = [];
    let u, p, m = 0, v = 0, D = 0;
    if (d.length !== 0) {
      e.next_in_index = 0, e.next_in = d, e.avail_in = d.length;
      do {
        if (e.next_out_index = 0, e.avail_out = i, e.avail_in === 0 && !a && (e.next_in_index = 0, a = !0), u = e.inflate(r), a && u === ye) {
          if (e.avail_in !== 0)
            throw new Error("inflating: bad input");
        } else if (u !== q && u !== ve)
          throw new Error("inflating: " + e.msg);
        if ((a || u === ve) && e.avail_in === d.length)
          throw new Error("inflating: bad input");
        e.next_out_index && (e.next_out_index === i ? x.push(new Uint8Array(s)) : x.push(s.subarray(0, e.next_out_index))), D += e.next_out_index, o && e.next_in_index > 0 && e.next_in_index != m && (o(e.next_in_index), m = e.next_in_index);
      } while (e.avail_in > 0 || e.avail_out === 0);
      return x.length > 1 ? (p = new Uint8Array(D), x.forEach(function(f) {
        p.set(f, v), v += f.length;
      })) : p = x[0] ? new Uint8Array(x[0]) : new Uint8Array(), p;
    }
  }, n.flush = function() {
    e.inflateEnd();
  };
}
const je = 4294967295, Oe = 65535, Tr = 8, Rr = 0, Cr = 99, Or = 67324752, Dr = 134695760, Tn = 33639248, Ir = 101010256, Rn = 101075792, Fr = 117853008, Be = 22, It = 20, Ft = 56, Lr = 1, Nr = 39169, jr = 10, Pr = 1, Ur = 21589, Mr = 28789, Zr = 25461, Br = 6534, Cn = 1, Hr = 6, On = 8, Dn = 2048, In = 16, Gr = "/", ce = void 0, Ie = "undefined", tt = "function";
class Fn {
  constructor(n) {
    return class extends TransformStream {
      constructor(e, i) {
        const r = new n(i);
        super({
          transform(s, a) {
            a.enqueue(r.append(s));
          },
          flush(s) {
            const a = r.flush();
            a && s.enqueue(a);
          }
        });
      }
    };
  }
}
const qr = 64;
let ii = 2;
try {
  typeof navigator != Ie && navigator.hardwareConcurrency && (ii = navigator.hardwareConcurrency);
} catch {
}
const Wr = {
  chunkSize: 512 * 1024,
  maxWorkers: ii,
  terminateWorkerTimeout: 5e3,
  useWebWorkers: !0,
  useCompressionStream: !0,
  workerScripts: ce,
  CompressionStreamNative: typeof CompressionStream != Ie && CompressionStream,
  DecompressionStreamNative: typeof DecompressionStream != Ie && DecompressionStream
}, De = Object.assign({}, Wr);
function $r() {
  return De;
}
function Kr(t) {
  return Math.max(t.chunkSize, qr);
}
function Wt(t) {
  const {
    baseURL: n,
    chunkSize: e,
    maxWorkers: i,
    terminateWorkerTimeout: r,
    useCompressionStream: s,
    useWebWorkers: a,
    Deflate: d,
    Inflate: o,
    CompressionStream: x,
    DecompressionStream: u,
    workerScripts: p
  } = t;
  if (Re("baseURL", n), Re("chunkSize", e), Re("maxWorkers", i), Re("terminateWorkerTimeout", r), Re("useCompressionStream", s), Re("useWebWorkers", a), d && (De.CompressionStream = new Fn(d)), o && (De.DecompressionStream = new Fn(o)), Re("CompressionStream", x), Re("DecompressionStream", u), p !== ce) {
    const { deflate: m, inflate: v } = p;
    if ((m || v) && (De.workerScripts || (De.workerScripts = {})), m) {
      if (!Array.isArray(m))
        throw new Error("workerScripts.deflate must be an array");
      De.workerScripts.deflate = m;
    }
    if (v) {
      if (!Array.isArray(v))
        throw new Error("workerScripts.inflate must be an array");
      De.workerScripts.inflate = v;
    }
  }
}
function Re(t, n) {
  n !== ce && (De[t] = n);
}
const Lt = {
  application: {
    "andrew-inset": "ez",
    annodex: "anx",
    "atom+xml": "atom",
    "atomcat+xml": "atomcat",
    "atomserv+xml": "atomsrv",
    bbolin: "lin",
    "cu-seeme": "cu",
    "davmount+xml": "davmount",
    dsptype: "tsp",
    ecmascript: [
      "es",
      "ecma"
    ],
    futuresplash: "spl",
    hta: "hta",
    "java-archive": "jar",
    "java-serialized-object": "ser",
    "java-vm": "class",
    m3g: "m3g",
    "mac-binhex40": "hqx",
    mathematica: [
      "nb",
      "ma",
      "mb"
    ],
    msaccess: "mdb",
    msword: [
      "doc",
      "dot",
      "wiz"
    ],
    mxf: "mxf",
    oda: "oda",
    ogg: "ogx",
    pdf: "pdf",
    "pgp-keys": "key",
    "pgp-signature": [
      "asc",
      "sig"
    ],
    "pics-rules": "prf",
    postscript: [
      "ps",
      "ai",
      "eps",
      "epsi",
      "epsf",
      "eps2",
      "eps3"
    ],
    rar: "rar",
    "rdf+xml": "rdf",
    "rss+xml": "rss",
    rtf: "rtf",
    "xhtml+xml": [
      "xhtml",
      "xht"
    ],
    xml: [
      "xml",
      "xsl",
      "xsd",
      "xpdl"
    ],
    "xspf+xml": "xspf",
    zip: "zip",
    "vnd.android.package-archive": "apk",
    "vnd.cinderella": "cdy",
    "vnd.google-earth.kml+xml": "kml",
    "vnd.google-earth.kmz": "kmz",
    "vnd.mozilla.xul+xml": "xul",
    "vnd.ms-excel": [
      "xls",
      "xlb",
      "xlt",
      "xlm",
      "xla",
      "xlc",
      "xlw"
    ],
    "vnd.ms-pki.seccat": "cat",
    "vnd.ms-pki.stl": "stl",
    "vnd.ms-powerpoint": [
      "ppt",
      "pps",
      "pot",
      "ppa",
      "pwz"
    ],
    "vnd.oasis.opendocument.chart": "odc",
    "vnd.oasis.opendocument.database": "odb",
    "vnd.oasis.opendocument.formula": "odf",
    "vnd.oasis.opendocument.graphics": "odg",
    "vnd.oasis.opendocument.graphics-template": "otg",
    "vnd.oasis.opendocument.image": "odi",
    "vnd.oasis.opendocument.presentation": "odp",
    "vnd.oasis.opendocument.presentation-template": "otp",
    "vnd.oasis.opendocument.spreadsheet": "ods",
    "vnd.oasis.opendocument.spreadsheet-template": "ots",
    "vnd.oasis.opendocument.text": "odt",
    "vnd.oasis.opendocument.text-master": [
      "odm",
      "otm"
    ],
    "vnd.oasis.opendocument.text-template": "ott",
    "vnd.oasis.opendocument.text-web": "oth",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx",
    "vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
    "vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx",
    "vnd.openxmlformats-officedocument.presentationml.template": "potx",
    "vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
    "vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx",
    "vnd.smaf": "mmf",
    "vnd.stardivision.calc": "sdc",
    "vnd.stardivision.chart": "sds",
    "vnd.stardivision.draw": "sda",
    "vnd.stardivision.impress": "sdd",
    "vnd.stardivision.math": [
      "sdf",
      "smf"
    ],
    "vnd.stardivision.writer": [
      "sdw",
      "vor"
    ],
    "vnd.stardivision.writer-global": "sgl",
    "vnd.sun.xml.calc": "sxc",
    "vnd.sun.xml.calc.template": "stc",
    "vnd.sun.xml.draw": "sxd",
    "vnd.sun.xml.draw.template": "std",
    "vnd.sun.xml.impress": "sxi",
    "vnd.sun.xml.impress.template": "sti",
    "vnd.sun.xml.math": "sxm",
    "vnd.sun.xml.writer": "sxw",
    "vnd.sun.xml.writer.global": "sxg",
    "vnd.sun.xml.writer.template": "stw",
    "vnd.symbian.install": [
      "sis",
      "sisx"
    ],
    "vnd.visio": [
      "vsd",
      "vst",
      "vss",
      "vsw",
      "vsdx",
      "vssx",
      "vstx",
      "vssm",
      "vstm"
    ],
    "vnd.wap.wbxml": "wbxml",
    "vnd.wap.wmlc": "wmlc",
    "vnd.wap.wmlscriptc": "wmlsc",
    "vnd.wordperfect": "wpd",
    "vnd.wordperfect5.1": "wp5",
    "x-123": "wk",
    "x-7z-compressed": "7z",
    "x-abiword": "abw",
    "x-apple-diskimage": "dmg",
    "x-bcpio": "bcpio",
    "x-bittorrent": "torrent",
    "x-cbr": [
      "cbr",
      "cba",
      "cbt",
      "cb7"
    ],
    "x-cbz": "cbz",
    "x-cdf": [
      "cdf",
      "cda"
    ],
    "x-cdlink": "vcd",
    "x-chess-pgn": "pgn",
    "x-cpio": "cpio",
    "x-csh": "csh",
    "x-director": [
      "dir",
      "dxr",
      "cst",
      "cct",
      "cxt",
      "w3d",
      "fgd",
      "swa"
    ],
    "x-dms": "dms",
    "x-doom": "wad",
    "x-dvi": "dvi",
    "x-httpd-eruby": "rhtml",
    "x-font": "pcf.Z",
    "x-freemind": "mm",
    "x-gnumeric": "gnumeric",
    "x-go-sgf": "sgf",
    "x-graphing-calculator": "gcf",
    "x-gtar": [
      "gtar",
      "taz"
    ],
    "x-hdf": "hdf",
    "x-httpd-php": [
      "phtml",
      "pht",
      "php"
    ],
    "x-httpd-php-source": "phps",
    "x-httpd-php3": "php3",
    "x-httpd-php3-preprocessed": "php3p",
    "x-httpd-php4": "php4",
    "x-httpd-php5": "php5",
    "x-ica": "ica",
    "x-info": "info",
    "x-internet-signup": [
      "ins",
      "isp"
    ],
    "x-iphone": "iii",
    "x-iso9660-image": "iso",
    "x-java-jnlp-file": "jnlp",
    "x-jmol": "jmz",
    "x-killustrator": "kil",
    "x-latex": "latex",
    "x-lyx": "lyx",
    "x-lzx": "lzx",
    "x-maker": [
      "frm",
      "fb",
      "fbdoc"
    ],
    "x-ms-wmd": "wmd",
    "x-msdos-program": [
      "com",
      "exe",
      "bat",
      "dll"
    ],
    "x-netcdf": [
      "nc"
    ],
    "x-ns-proxy-autoconfig": [
      "pac",
      "dat"
    ],
    "x-nwc": "nwc",
    "x-object": "o",
    "x-oz-application": "oza",
    "x-pkcs7-certreqresp": "p7r",
    "x-python-code": [
      "pyc",
      "pyo"
    ],
    "x-qgis": [
      "qgs",
      "shp",
      "shx"
    ],
    "x-quicktimeplayer": "qtl",
    "x-redhat-package-manager": [
      "rpm",
      "rpa"
    ],
    "x-ruby": "rb",
    "x-sh": "sh",
    "x-shar": "shar",
    "x-shockwave-flash": [
      "swf",
      "swfl"
    ],
    "x-silverlight": "scr",
    "x-stuffit": "sit",
    "x-sv4cpio": "sv4cpio",
    "x-sv4crc": "sv4crc",
    "x-tar": "tar",
    "x-tex-gf": "gf",
    "x-tex-pk": "pk",
    "x-texinfo": [
      "texinfo",
      "texi"
    ],
    "x-trash": [
      "~",
      "%",
      "bak",
      "old",
      "sik"
    ],
    "x-ustar": "ustar",
    "x-wais-source": "src",
    "x-wingz": "wz",
    "x-x509-ca-cert": [
      "crt",
      "der",
      "cer"
    ],
    "x-xcf": "xcf",
    "x-xfig": "fig",
    "x-xpinstall": "xpi",
    applixware: "aw",
    "atomsvc+xml": "atomsvc",
    "ccxml+xml": "ccxml",
    "cdmi-capability": "cdmia",
    "cdmi-container": "cdmic",
    "cdmi-domain": "cdmid",
    "cdmi-object": "cdmio",
    "cdmi-queue": "cdmiq",
    "docbook+xml": "dbk",
    "dssc+der": "dssc",
    "dssc+xml": "xdssc",
    "emma+xml": "emma",
    "epub+zip": "epub",
    exi: "exi",
    "font-tdpfr": "pfr",
    "gml+xml": "gml",
    "gpx+xml": "gpx",
    gxf: "gxf",
    hyperstudio: "stk",
    "inkml+xml": [
      "ink",
      "inkml"
    ],
    ipfix: "ipfix",
    "jsonml+json": "jsonml",
    "lost+xml": "lostxml",
    "mads+xml": "mads",
    marc: "mrc",
    "marcxml+xml": "mrcx",
    "mathml+xml": [
      "mathml",
      "mml"
    ],
    mbox: "mbox",
    "mediaservercontrol+xml": "mscml",
    "metalink+xml": "metalink",
    "metalink4+xml": "meta4",
    "mets+xml": "mets",
    "mods+xml": "mods",
    mp21: [
      "m21",
      "mp21"
    ],
    mp4: "mp4s",
    "oebps-package+xml": "opf",
    "omdoc+xml": "omdoc",
    onenote: [
      "onetoc",
      "onetoc2",
      "onetmp",
      "onepkg"
    ],
    oxps: "oxps",
    "patch-ops-error+xml": "xer",
    "pgp-encrypted": "pgp",
    pkcs10: "p10",
    "pkcs7-mime": [
      "p7m",
      "p7c"
    ],
    "pkcs7-signature": "p7s",
    pkcs8: "p8",
    "pkix-attr-cert": "ac",
    "pkix-crl": "crl",
    "pkix-pkipath": "pkipath",
    pkixcmp: "pki",
    "pls+xml": "pls",
    "prs.cww": "cww",
    "pskc+xml": "pskcxml",
    "reginfo+xml": "rif",
    "relax-ng-compact-syntax": "rnc",
    "resource-lists+xml": "rl",
    "resource-lists-diff+xml": "rld",
    "rls-services+xml": "rs",
    "rpki-ghostbusters": "gbr",
    "rpki-manifest": "mft",
    "rpki-roa": "roa",
    "rsd+xml": "rsd",
    "sbml+xml": "sbml",
    "scvp-cv-request": "scq",
    "scvp-cv-response": "scs",
    "scvp-vp-request": "spq",
    "scvp-vp-response": "spp",
    sdp: "sdp",
    "set-payment-initiation": "setpay",
    "set-registration-initiation": "setreg",
    "shf+xml": "shf",
    "sparql-query": "rq",
    "sparql-results+xml": "srx",
    srgs: "gram",
    "srgs+xml": "grxml",
    "sru+xml": "sru",
    "ssdl+xml": "ssdl",
    "ssml+xml": "ssml",
    "tei+xml": [
      "tei",
      "teicorpus"
    ],
    "thraud+xml": "tfi",
    "timestamped-data": "tsd",
    "vnd.3gpp.pic-bw-large": "plb",
    "vnd.3gpp.pic-bw-small": "psb",
    "vnd.3gpp.pic-bw-var": "pvb",
    "vnd.3gpp2.tcap": "tcap",
    "vnd.3m.post-it-notes": "pwn",
    "vnd.accpac.simply.aso": "aso",
    "vnd.accpac.simply.imp": "imp",
    "vnd.acucobol": "acu",
    "vnd.acucorp": [
      "atc",
      "acutc"
    ],
    "vnd.adobe.air-application-installer-package+zip": "air",
    "vnd.adobe.formscentral.fcdt": "fcdt",
    "vnd.adobe.fxp": [
      "fxp",
      "fxpl"
    ],
    "vnd.adobe.xdp+xml": "xdp",
    "vnd.adobe.xfdf": "xfdf",
    "vnd.ahead.space": "ahead",
    "vnd.airzip.filesecure.azf": "azf",
    "vnd.airzip.filesecure.azs": "azs",
    "vnd.amazon.ebook": "azw",
    "vnd.americandynamics.acc": "acc",
    "vnd.amiga.ami": "ami",
    "vnd.anser-web-certificate-issue-initiation": "cii",
    "vnd.anser-web-funds-transfer-initiation": "fti",
    "vnd.antix.game-component": "atx",
    "vnd.apple.installer+xml": "mpkg",
    "vnd.apple.mpegurl": "m3u8",
    "vnd.aristanetworks.swi": "swi",
    "vnd.astraea-software.iota": "iota",
    "vnd.audiograph": "aep",
    "vnd.blueice.multipass": "mpm",
    "vnd.bmi": "bmi",
    "vnd.businessobjects": "rep",
    "vnd.chemdraw+xml": "cdxml",
    "vnd.chipnuts.karaoke-mmd": "mmd",
    "vnd.claymore": "cla",
    "vnd.cloanto.rp9": "rp9",
    "vnd.clonk.c4group": [
      "c4g",
      "c4d",
      "c4f",
      "c4p",
      "c4u"
    ],
    "vnd.cluetrust.cartomobile-config": "c11amc",
    "vnd.cluetrust.cartomobile-config-pkg": "c11amz",
    "vnd.commonspace": "csp",
    "vnd.contact.cmsg": "cdbcmsg",
    "vnd.cosmocaller": "cmc",
    "vnd.crick.clicker": "clkx",
    "vnd.crick.clicker.keyboard": "clkk",
    "vnd.crick.clicker.palette": "clkp",
    "vnd.crick.clicker.template": "clkt",
    "vnd.crick.clicker.wordbank": "clkw",
    "vnd.criticaltools.wbs+xml": "wbs",
    "vnd.ctc-posml": "pml",
    "vnd.cups-ppd": "ppd",
    "vnd.curl.car": "car",
    "vnd.curl.pcurl": "pcurl",
    "vnd.dart": "dart",
    "vnd.data-vision.rdz": "rdz",
    "vnd.dece.data": [
      "uvf",
      "uvvf",
      "uvd",
      "uvvd"
    ],
    "vnd.dece.ttml+xml": [
      "uvt",
      "uvvt"
    ],
    "vnd.dece.unspecified": [
      "uvx",
      "uvvx"
    ],
    "vnd.dece.zip": [
      "uvz",
      "uvvz"
    ],
    "vnd.denovo.fcselayout-link": "fe_launch",
    "vnd.dna": "dna",
    "vnd.dolby.mlp": "mlp",
    "vnd.dpgraph": "dpg",
    "vnd.dreamfactory": "dfac",
    "vnd.ds-keypoint": "kpxx",
    "vnd.dvb.ait": "ait",
    "vnd.dvb.service": "svc",
    "vnd.dynageo": "geo",
    "vnd.ecowin.chart": "mag",
    "vnd.enliven": "nml",
    "vnd.epson.esf": "esf",
    "vnd.epson.msf": "msf",
    "vnd.epson.quickanime": "qam",
    "vnd.epson.salt": "slt",
    "vnd.epson.ssf": "ssf",
    "vnd.eszigno3+xml": [
      "es3",
      "et3"
    ],
    "vnd.ezpix-album": "ez2",
    "vnd.ezpix-package": "ez3",
    "vnd.fdf": "fdf",
    "vnd.fdsn.mseed": "mseed",
    "vnd.fdsn.seed": [
      "seed",
      "dataless"
    ],
    "vnd.flographit": "gph",
    "vnd.fluxtime.clip": "ftc",
    "vnd.framemaker": [
      "fm",
      "frame",
      "maker",
      "book"
    ],
    "vnd.frogans.fnc": "fnc",
    "vnd.frogans.ltf": "ltf",
    "vnd.fsc.weblaunch": "fsc",
    "vnd.fujitsu.oasys": "oas",
    "vnd.fujitsu.oasys2": "oa2",
    "vnd.fujitsu.oasys3": "oa3",
    "vnd.fujitsu.oasysgp": "fg5",
    "vnd.fujitsu.oasysprs": "bh2",
    "vnd.fujixerox.ddd": "ddd",
    "vnd.fujixerox.docuworks": "xdw",
    "vnd.fujixerox.docuworks.binder": "xbd",
    "vnd.fuzzysheet": "fzs",
    "vnd.genomatix.tuxedo": "txd",
    "vnd.geogebra.file": "ggb",
    "vnd.geogebra.tool": "ggt",
    "vnd.geometry-explorer": [
      "gex",
      "gre"
    ],
    "vnd.geonext": "gxt",
    "vnd.geoplan": "g2w",
    "vnd.geospace": "g3w",
    "vnd.gmx": "gmx",
    "vnd.grafeq": [
      "gqf",
      "gqs"
    ],
    "vnd.groove-account": "gac",
    "vnd.groove-help": "ghf",
    "vnd.groove-identity-message": "gim",
    "vnd.groove-injector": "grv",
    "vnd.groove-tool-message": "gtm",
    "vnd.groove-tool-template": "tpl",
    "vnd.groove-vcard": "vcg",
    "vnd.hal+xml": "hal",
    "vnd.handheld-entertainment+xml": "zmm",
    "vnd.hbci": "hbci",
    "vnd.hhe.lesson-player": "les",
    "vnd.hp-hpgl": "hpgl",
    "vnd.hp-hpid": "hpid",
    "vnd.hp-hps": "hps",
    "vnd.hp-jlyt": "jlt",
    "vnd.hp-pcl": "pcl",
    "vnd.hp-pclxl": "pclxl",
    "vnd.hydrostatix.sof-data": "sfd-hdstx",
    "vnd.ibm.minipay": "mpy",
    "vnd.ibm.modcap": [
      "afp",
      "listafp",
      "list3820"
    ],
    "vnd.ibm.rights-management": "irm",
    "vnd.ibm.secure-container": "sc",
    "vnd.iccprofile": [
      "icc",
      "icm"
    ],
    "vnd.igloader": "igl",
    "vnd.immervision-ivp": "ivp",
    "vnd.immervision-ivu": "ivu",
    "vnd.insors.igm": "igm",
    "vnd.intercon.formnet": [
      "xpw",
      "xpx"
    ],
    "vnd.intergeo": "i2g",
    "vnd.intu.qbo": "qbo",
    "vnd.intu.qfx": "qfx",
    "vnd.ipunplugged.rcprofile": "rcprofile",
    "vnd.irepository.package+xml": "irp",
    "vnd.is-xpr": "xpr",
    "vnd.isac.fcs": "fcs",
    "vnd.jam": "jam",
    "vnd.jcp.javame.midlet-rms": "rms",
    "vnd.jisp": "jisp",
    "vnd.joost.joda-archive": "joda",
    "vnd.kahootz": [
      "ktz",
      "ktr"
    ],
    "vnd.kde.karbon": "karbon",
    "vnd.kde.kchart": "chrt",
    "vnd.kde.kformula": "kfo",
    "vnd.kde.kivio": "flw",
    "vnd.kde.kontour": "kon",
    "vnd.kde.kpresenter": [
      "kpr",
      "kpt"
    ],
    "vnd.kde.kspread": "ksp",
    "vnd.kde.kword": [
      "kwd",
      "kwt"
    ],
    "vnd.kenameaapp": "htke",
    "vnd.kidspiration": "kia",
    "vnd.kinar": [
      "kne",
      "knp"
    ],
    "vnd.koan": [
      "skp",
      "skd",
      "skt",
      "skm"
    ],
    "vnd.kodak-descriptor": "sse",
    "vnd.las.las+xml": "lasxml",
    "vnd.llamagraphics.life-balance.desktop": "lbd",
    "vnd.llamagraphics.life-balance.exchange+xml": "lbe",
    "vnd.lotus-1-2-3": "123",
    "vnd.lotus-approach": "apr",
    "vnd.lotus-freelance": "pre",
    "vnd.lotus-notes": "nsf",
    "vnd.lotus-organizer": "org",
    "vnd.lotus-screencam": "scm",
    "vnd.lotus-wordpro": "lwp",
    "vnd.macports.portpkg": "portpkg",
    "vnd.mcd": "mcd",
    "vnd.medcalcdata": "mc1",
    "vnd.mediastation.cdkey": "cdkey",
    "vnd.mfer": "mwf",
    "vnd.mfmp": "mfm",
    "vnd.micrografx.flo": "flo",
    "vnd.micrografx.igx": "igx",
    "vnd.mif": "mif",
    "vnd.mobius.daf": "daf",
    "vnd.mobius.dis": "dis",
    "vnd.mobius.mbk": "mbk",
    "vnd.mobius.mqy": "mqy",
    "vnd.mobius.msl": "msl",
    "vnd.mobius.plc": "plc",
    "vnd.mobius.txf": "txf",
    "vnd.mophun.application": "mpn",
    "vnd.mophun.certificate": "mpc",
    "vnd.ms-artgalry": "cil",
    "vnd.ms-cab-compressed": "cab",
    "vnd.ms-excel.addin.macroenabled.12": "xlam",
    "vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb",
    "vnd.ms-excel.sheet.macroenabled.12": "xlsm",
    "vnd.ms-excel.template.macroenabled.12": "xltm",
    "vnd.ms-fontobject": "eot",
    "vnd.ms-htmlhelp": "chm",
    "vnd.ms-ims": "ims",
    "vnd.ms-lrm": "lrm",
    "vnd.ms-officetheme": "thmx",
    "vnd.ms-powerpoint.addin.macroenabled.12": "ppam",
    "vnd.ms-powerpoint.presentation.macroenabled.12": "pptm",
    "vnd.ms-powerpoint.slide.macroenabled.12": "sldm",
    "vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm",
    "vnd.ms-powerpoint.template.macroenabled.12": "potm",
    "vnd.ms-project": [
      "mpp",
      "mpt"
    ],
    "vnd.ms-word.document.macroenabled.12": "docm",
    "vnd.ms-word.template.macroenabled.12": "dotm",
    "vnd.ms-works": [
      "wps",
      "wks",
      "wcm",
      "wdb"
    ],
    "vnd.ms-wpl": "wpl",
    "vnd.ms-xpsdocument": "xps",
    "vnd.mseq": "mseq",
    "vnd.musician": "mus",
    "vnd.muvee.style": "msty",
    "vnd.mynfc": "taglet",
    "vnd.neurolanguage.nlu": "nlu",
    "vnd.nitf": [
      "ntf",
      "nitf"
    ],
    "vnd.noblenet-directory": "nnd",
    "vnd.noblenet-sealer": "nns",
    "vnd.noblenet-web": "nnw",
    "vnd.nokia.n-gage.data": "ngdat",
    "vnd.nokia.n-gage.symbian.install": "n-gage",
    "vnd.nokia.radio-preset": "rpst",
    "vnd.nokia.radio-presets": "rpss",
    "vnd.novadigm.edm": "edm",
    "vnd.novadigm.edx": "edx",
    "vnd.novadigm.ext": "ext",
    "vnd.oasis.opendocument.chart-template": "otc",
    "vnd.oasis.opendocument.formula-template": "odft",
    "vnd.oasis.opendocument.image-template": "oti",
    "vnd.olpc-sugar": "xo",
    "vnd.oma.dd2+xml": "dd2",
    "vnd.openofficeorg.extension": "oxt",
    "vnd.openxmlformats-officedocument.presentationml.slide": "sldx",
    "vnd.osgeo.mapguide.package": "mgp",
    "vnd.osgi.dp": "dp",
    "vnd.osgi.subsystem": "esa",
    "vnd.palm": [
      "pdb",
      "pqa",
      "oprc"
    ],
    "vnd.pawaafile": "paw",
    "vnd.pg.format": "str",
    "vnd.pg.osasli": "ei6",
    "vnd.picsel": "efif",
    "vnd.pmi.widget": "wg",
    "vnd.pocketlearn": "plf",
    "vnd.powerbuilder6": "pbd",
    "vnd.previewsystems.box": "box",
    "vnd.proteus.magazine": "mgz",
    "vnd.publishare-delta-tree": "qps",
    "vnd.pvi.ptid1": "ptid",
    "vnd.quark.quarkxpress": [
      "qxd",
      "qxt",
      "qwd",
      "qwt",
      "qxl",
      "qxb"
    ],
    "vnd.realvnc.bed": "bed",
    "vnd.recordare.musicxml": "mxl",
    "vnd.recordare.musicxml+xml": "musicxml",
    "vnd.rig.cryptonote": "cryptonote",
    "vnd.rn-realmedia": "rm",
    "vnd.rn-realmedia-vbr": "rmvb",
    "vnd.route66.link66+xml": "link66",
    "vnd.sailingtracker.track": "st",
    "vnd.seemail": "see",
    "vnd.sema": "sema",
    "vnd.semd": "semd",
    "vnd.semf": "semf",
    "vnd.shana.informed.formdata": "ifm",
    "vnd.shana.informed.formtemplate": "itp",
    "vnd.shana.informed.interchange": "iif",
    "vnd.shana.informed.package": "ipk",
    "vnd.simtech-mindmapper": [
      "twd",
      "twds"
    ],
    "vnd.smart.teacher": "teacher",
    "vnd.solent.sdkm+xml": [
      "sdkm",
      "sdkd"
    ],
    "vnd.spotfire.dxp": "dxp",
    "vnd.spotfire.sfs": "sfs",
    "vnd.stepmania.package": "smzip",
    "vnd.stepmania.stepchart": "sm",
    "vnd.sus-calendar": [
      "sus",
      "susp"
    ],
    "vnd.svd": "svd",
    "vnd.syncml+xml": "xsm",
    "vnd.syncml.dm+wbxml": "bdm",
    "vnd.syncml.dm+xml": "xdm",
    "vnd.tao.intent-module-archive": "tao",
    "vnd.tcpdump.pcap": [
      "pcap",
      "cap",
      "dmp"
    ],
    "vnd.tmobile-livetv": "tmo",
    "vnd.trid.tpt": "tpt",
    "vnd.triscape.mxs": "mxs",
    "vnd.trueapp": "tra",
    "vnd.ufdl": [
      "ufd",
      "ufdl"
    ],
    "vnd.uiq.theme": "utz",
    "vnd.umajin": "umj",
    "vnd.unity": "unityweb",
    "vnd.uoml+xml": "uoml",
    "vnd.vcx": "vcx",
    "vnd.visionary": "vis",
    "vnd.vsf": "vsf",
    "vnd.webturbo": "wtb",
    "vnd.wolfram.player": "nbp",
    "vnd.wqd": "wqd",
    "vnd.wt.stf": "stf",
    "vnd.xara": "xar",
    "vnd.xfdl": "xfdl",
    "vnd.yamaha.hv-dic": "hvd",
    "vnd.yamaha.hv-script": "hvs",
    "vnd.yamaha.hv-voice": "hvp",
    "vnd.yamaha.openscoreformat": "osf",
    "vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg",
    "vnd.yamaha.smaf-audio": "saf",
    "vnd.yamaha.smaf-phrase": "spf",
    "vnd.yellowriver-custom-menu": "cmp",
    "vnd.zul": [
      "zir",
      "zirz"
    ],
    "vnd.zzazz.deck+xml": "zaz",
    "voicexml+xml": "vxml",
    widget: "wgt",
    winhlp: "hlp",
    "wsdl+xml": "wsdl",
    "wspolicy+xml": "wspolicy",
    "x-ace-compressed": "ace",
    "x-authorware-bin": [
      "aab",
      "x32",
      "u32",
      "vox"
    ],
    "x-authorware-map": "aam",
    "x-authorware-seg": "aas",
    "x-blorb": [
      "blb",
      "blorb"
    ],
    "x-bzip": "bz",
    "x-bzip2": [
      "bz2",
      "boz"
    ],
    "x-cfs-compressed": "cfs",
    "x-chat": "chat",
    "x-conference": "nsc",
    "x-dgc-compressed": "dgc",
    "x-dtbncx+xml": "ncx",
    "x-dtbook+xml": "dtb",
    "x-dtbresource+xml": "res",
    "x-eva": "eva",
    "x-font-bdf": "bdf",
    "x-font-ghostscript": "gsf",
    "x-font-linux-psf": "psf",
    "x-font-pcf": "pcf",
    "x-font-snf": "snf",
    "x-font-ttf": [
      "ttf",
      "ttc"
    ],
    "x-font-type1": [
      "pfa",
      "pfb",
      "pfm",
      "afm"
    ],
    "x-freearc": "arc",
    "x-gca-compressed": "gca",
    "x-glulx": "ulx",
    "x-gramps-xml": "gramps",
    "x-install-instructions": "install",
    "x-lzh-compressed": [
      "lzh",
      "lha"
    ],
    "x-mie": "mie",
    "x-mobipocket-ebook": [
      "prc",
      "mobi"
    ],
    "x-ms-application": "application",
    "x-ms-shortcut": "lnk",
    "x-ms-xbap": "xbap",
    "x-msbinder": "obd",
    "x-mscardfile": "crd",
    "x-msclip": "clp",
    "application/x-ms-installer": "msi",
    "x-msmediaview": [
      "mvb",
      "m13",
      "m14"
    ],
    "x-msmetafile": [
      "wmf",
      "wmz",
      "emf",
      "emz"
    ],
    "x-msmoney": "mny",
    "x-mspublisher": "pub",
    "x-msschedule": "scd",
    "x-msterminal": "trm",
    "x-mswrite": "wri",
    "x-nzb": "nzb",
    "x-pkcs12": [
      "p12",
      "pfx"
    ],
    "x-pkcs7-certificates": [
      "p7b",
      "spc"
    ],
    "x-research-info-systems": "ris",
    "x-silverlight-app": "xap",
    "x-sql": "sql",
    "x-stuffitx": "sitx",
    "x-subrip": "srt",
    "x-t3vm-image": "t3",
    "x-tex-tfm": "tfm",
    "x-tgif": "obj",
    "x-xliff+xml": "xlf",
    "x-xz": "xz",
    "x-zmachine": [
      "z1",
      "z2",
      "z3",
      "z4",
      "z5",
      "z6",
      "z7",
      "z8"
    ],
    "xaml+xml": "xaml",
    "xcap-diff+xml": "xdf",
    "xenc+xml": "xenc",
    "xml-dtd": "dtd",
    "xop+xml": "xop",
    "xproc+xml": "xpl",
    "xslt+xml": "xslt",
    "xv+xml": [
      "mxml",
      "xhvml",
      "xvml",
      "xvm"
    ],
    yang: "yang",
    "yin+xml": "yin",
    envoy: "evy",
    fractals: "fif",
    "internet-property-stream": "acx",
    olescript: "axs",
    "vnd.ms-outlook": "msg",
    "vnd.ms-pkicertstore": "sst",
    "x-compress": "z",
    "x-perfmon": [
      "pma",
      "pmc",
      "pmr",
      "pmw"
    ],
    "ynd.ms-pkipko": "pko",
    gzip: [
      "gz",
      "tgz"
    ],
    "smil+xml": [
      "smi",
      "smil"
    ],
    "vnd.debian.binary-package": [
      "deb",
      "udeb"
    ],
    "vnd.hzn-3d-crossword": "x3d",
    "vnd.sqlite3": [
      "db",
      "sqlite",
      "sqlite3",
      "db-wal",
      "sqlite-wal",
      "db-shm",
      "sqlite-shm"
    ],
    "vnd.wap.sic": "sic",
    "vnd.wap.slc": "slc",
    "x-krita": [
      "kra",
      "krz"
    ],
    "x-perl": [
      "pm",
      "pl"
    ],
    yaml: [
      "yaml",
      "yml"
    ]
  },
  audio: {
    amr: "amr",
    "amr-wb": "awb",
    annodex: "axa",
    basic: [
      "au",
      "snd"
    ],
    flac: "flac",
    midi: [
      "mid",
      "midi",
      "kar",
      "rmi"
    ],
    mpeg: [
      "mpga",
      "mpega",
      "mp3",
      "m4a",
      "mp2a",
      "m2a",
      "m3a"
    ],
    mpegurl: "m3u",
    ogg: [
      "oga",
      "ogg",
      "spx"
    ],
    "prs.sid": "sid",
    "x-aiff": "aifc",
    "x-gsm": "gsm",
    "x-ms-wma": "wma",
    "x-ms-wax": "wax",
    "x-pn-realaudio": "ram",
    "x-realaudio": "ra",
    "x-sd2": "sd2",
    adpcm: "adp",
    mp4: "mp4a",
    s3m: "s3m",
    silk: "sil",
    "vnd.dece.audio": [
      "uva",
      "uvva"
    ],
    "vnd.digital-winds": "eol",
    "vnd.dra": "dra",
    "vnd.dts": "dts",
    "vnd.dts.hd": "dtshd",
    "vnd.lucent.voice": "lvp",
    "vnd.ms-playready.media.pya": "pya",
    "vnd.nuera.ecelp4800": "ecelp4800",
    "vnd.nuera.ecelp7470": "ecelp7470",
    "vnd.nuera.ecelp9600": "ecelp9600",
    "vnd.rip": "rip",
    webm: "weba",
    "x-caf": "caf",
    "x-matroska": "mka",
    "x-pn-realaudio-plugin": "rmp",
    xm: "xm",
    aac: "aac",
    aiff: [
      "aiff",
      "aif",
      "aff"
    ],
    opus: "opus",
    wav: "wav"
  },
  chemical: {
    "x-alchemy": "alc",
    "x-cache": [
      "cac",
      "cache"
    ],
    "x-cache-csf": "csf",
    "x-cactvs-binary": [
      "cbin",
      "cascii",
      "ctab"
    ],
    "x-cdx": "cdx",
    "x-chem3d": "c3d",
    "x-cif": "cif",
    "x-cmdf": "cmdf",
    "x-cml": "cml",
    "x-compass": "cpa",
    "x-crossfire": "bsd",
    "x-csml": [
      "csml",
      "csm"
    ],
    "x-ctx": "ctx",
    "x-cxf": [
      "cxf",
      "cef"
    ],
    "x-embl-dl-nucleotide": [
      "emb",
      "embl"
    ],
    "x-gamess-input": [
      "inp",
      "gam",
      "gamin"
    ],
    "x-gaussian-checkpoint": [
      "fch",
      "fchk"
    ],
    "x-gaussian-cube": "cub",
    "x-gaussian-input": [
      "gau",
      "gjc",
      "gjf"
    ],
    "x-gaussian-log": "gal",
    "x-gcg8-sequence": "gcg",
    "x-genbank": "gen",
    "x-hin": "hin",
    "x-isostar": [
      "istr",
      "ist"
    ],
    "x-jcamp-dx": [
      "jdx",
      "dx"
    ],
    "x-kinemage": "kin",
    "x-macmolecule": "mcm",
    "x-macromodel-input": "mmod",
    "x-mdl-molfile": "mol",
    "x-mdl-rdfile": "rd",
    "x-mdl-rxnfile": "rxn",
    "x-mdl-sdfile": "sd",
    "x-mdl-tgf": "tgf",
    "x-mmcif": "mcif",
    "x-mol2": "mol2",
    "x-molconn-Z": "b",
    "x-mopac-graph": "gpt",
    "x-mopac-input": [
      "mop",
      "mopcrt",
      "zmt"
    ],
    "x-mopac-out": "moo",
    "x-ncbi-asn1": "asn",
    "x-ncbi-asn1-ascii": [
      "prt",
      "ent"
    ],
    "x-ncbi-asn1-binary": "val",
    "x-rosdal": "ros",
    "x-swissprot": "sw",
    "x-vamas-iso14976": "vms",
    "x-vmd": "vmd",
    "x-xtel": "xtel",
    "x-xyz": "xyz"
  },
  font: {
    otf: "otf",
    woff: "woff",
    woff2: "woff2"
  },
  image: {
    gif: "gif",
    ief: "ief",
    jpeg: [
      "jpeg",
      "jpg",
      "jpe",
      "jfif",
      "jfif-tbnl",
      "jif"
    ],
    pcx: "pcx",
    png: "png",
    "svg+xml": [
      "svg",
      "svgz"
    ],
    tiff: [
      "tiff",
      "tif"
    ],
    "vnd.djvu": [
      "djvu",
      "djv"
    ],
    "vnd.wap.wbmp": "wbmp",
    "x-canon-cr2": "cr2",
    "x-canon-crw": "crw",
    "x-cmu-raster": "ras",
    "x-coreldraw": "cdr",
    "x-coreldrawpattern": "pat",
    "x-coreldrawtemplate": "cdt",
    "x-corelphotopaint": "cpt",
    "x-epson-erf": "erf",
    "x-icon": "ico",
    "x-jg": "art",
    "x-jng": "jng",
    "x-nikon-nef": "nef",
    "x-olympus-orf": "orf",
    "x-portable-anymap": "pnm",
    "x-portable-bitmap": "pbm",
    "x-portable-graymap": "pgm",
    "x-portable-pixmap": "ppm",
    "x-rgb": "rgb",
    "x-xbitmap": "xbm",
    "x-xpixmap": "xpm",
    "x-xwindowdump": "xwd",
    bmp: "bmp",
    cgm: "cgm",
    g3fax: "g3",
    ktx: "ktx",
    "prs.btif": "btif",
    sgi: "sgi",
    "vnd.dece.graphic": [
      "uvi",
      "uvvi",
      "uvg",
      "uvvg"
    ],
    "vnd.dwg": "dwg",
    "vnd.dxf": "dxf",
    "vnd.fastbidsheet": "fbs",
    "vnd.fpx": "fpx",
    "vnd.fst": "fst",
    "vnd.fujixerox.edmics-mmr": "mmr",
    "vnd.fujixerox.edmics-rlc": "rlc",
    "vnd.ms-modi": "mdi",
    "vnd.ms-photo": "wdp",
    "vnd.net-fpx": "npx",
    "vnd.xiff": "xif",
    webp: "webp",
    "x-3ds": "3ds",
    "x-cmx": "cmx",
    "x-freehand": [
      "fh",
      "fhc",
      "fh4",
      "fh5",
      "fh7"
    ],
    "x-pict": [
      "pic",
      "pct"
    ],
    "x-tga": "tga",
    "cis-cod": "cod",
    avif: "avifs",
    heic: [
      "heif",
      "heic"
    ],
    pjpeg: [
      "pjpg"
    ],
    "vnd.adobe.photoshop": "psd",
    "x-adobe-dng": "dng",
    "x-fuji-raf": "raf",
    "x-icns": "icns",
    "x-kodak-dcr": "dcr",
    "x-kodak-k25": "k25",
    "x-kodak-kdc": "kdc",
    "x-minolta-mrw": "mrw",
    "x-panasonic-raw": [
      "raw",
      "rw2",
      "rwl"
    ],
    "x-pentax-pef": [
      "pef",
      "ptx"
    ],
    "x-sigma-x3f": "x3f",
    "x-sony-arw": "arw",
    "x-sony-sr2": "sr2",
    "x-sony-srf": "srf"
  },
  message: {
    rfc822: [
      "eml",
      "mime",
      "mht",
      "mhtml",
      "nws"
    ]
  },
  model: {
    iges: [
      "igs",
      "iges"
    ],
    mesh: [
      "msh",
      "mesh",
      "silo"
    ],
    vrml: [
      "wrl",
      "vrml"
    ],
    "x3d+vrml": [
      "x3dv",
      "x3dvz"
    ],
    "x3d+xml": "x3dz",
    "x3d+binary": [
      "x3db",
      "x3dbz"
    ],
    "vnd.collada+xml": "dae",
    "vnd.dwf": "dwf",
    "vnd.gdl": "gdl",
    "vnd.gtw": "gtw",
    "vnd.mts": "mts",
    "vnd.usdz+zip": "usdz",
    "vnd.vtu": "vtu"
  },
  text: {
    "cache-manifest": [
      "manifest",
      "appcache"
    ],
    calendar: [
      "ics",
      "icz",
      "ifb"
    ],
    css: "css",
    csv: "csv",
    h323: "323",
    html: [
      "html",
      "htm",
      "shtml",
      "stm"
    ],
    iuls: "uls",
    plain: [
      "txt",
      "text",
      "brf",
      "conf",
      "def",
      "list",
      "log",
      "in",
      "bas",
      "diff",
      "ksh"
    ],
    richtext: "rtx",
    scriptlet: [
      "sct",
      "wsc"
    ],
    texmacs: "tm",
    "tab-separated-values": "tsv",
    "vnd.sun.j2me.app-descriptor": "jad",
    "vnd.wap.wml": "wml",
    "vnd.wap.wmlscript": "wmls",
    "x-bibtex": "bib",
    "x-boo": "boo",
    "x-c++hdr": [
      "h++",
      "hpp",
      "hxx",
      "hh"
    ],
    "x-c++src": [
      "c++",
      "cpp",
      "cxx",
      "cc"
    ],
    "x-component": "htc",
    "x-dsrc": "d",
    "x-diff": "patch",
    "x-haskell": "hs",
    "x-java": "java",
    "x-literate-haskell": "lhs",
    "x-moc": "moc",
    "x-pascal": [
      "p",
      "pas",
      "pp",
      "inc"
    ],
    "x-pcs-gcd": "gcd",
    "x-python": "py",
    "x-scala": "scala",
    "x-setext": "etx",
    "x-tcl": [
      "tcl",
      "tk"
    ],
    "x-tex": [
      "tex",
      "ltx",
      "sty",
      "cls"
    ],
    "x-vcalendar": "vcs",
    "x-vcard": "vcf",
    n3: "n3",
    "prs.lines.tag": "dsc",
    sgml: [
      "sgml",
      "sgm"
    ],
    troff: [
      "t",
      "tr",
      "roff",
      "man",
      "me",
      "ms"
    ],
    turtle: "ttl",
    "uri-list": [
      "uri",
      "uris",
      "urls"
    ],
    vcard: "vcard",
    "vnd.curl": "curl",
    "vnd.curl.dcurl": "dcurl",
    "vnd.curl.scurl": "scurl",
    "vnd.curl.mcurl": "mcurl",
    "vnd.dvb.subtitle": "sub",
    "vnd.fly": "fly",
    "vnd.fmi.flexstor": "flx",
    "vnd.graphviz": "gv",
    "vnd.in3d.3dml": "3dml",
    "vnd.in3d.spot": "spot",
    "x-asm": [
      "s",
      "asm"
    ],
    "x-c": [
      "c",
      "h",
      "dic"
    ],
    "x-fortran": [
      "f",
      "for",
      "f77",
      "f90"
    ],
    "x-opml": "opml",
    "x-nfo": "nfo",
    "x-sfv": "sfv",
    "x-uuencode": "uu",
    webviewhtml: "htt",
    javascript: "js",
    json: "json",
    markdown: [
      "md",
      "markdown",
      "mdown",
      "markdn"
    ],
    "vnd.wap.si": "si",
    "vnd.wap.sl": "sl"
  },
  video: {
    avif: "avif",
    "3gpp": "3gp",
    annodex: "axv",
    dl: "dl",
    dv: [
      "dif",
      "dv"
    ],
    fli: "fli",
    gl: "gl",
    mpeg: [
      "mpeg",
      "mpg",
      "mpe",
      "m1v",
      "m2v",
      "mp2",
      "mpa",
      "mpv2"
    ],
    mp4: [
      "mp4",
      "mp4v",
      "mpg4"
    ],
    quicktime: [
      "qt",
      "mov"
    ],
    ogg: "ogv",
    "vnd.mpegurl": [
      "mxu",
      "m4u"
    ],
    "x-flv": "flv",
    "x-la-asf": [
      "lsf",
      "lsx"
    ],
    "x-mng": "mng",
    "x-ms-asf": [
      "asf",
      "asx",
      "asr"
    ],
    "x-ms-wm": "wm",
    "x-ms-wmv": "wmv",
    "x-ms-wmx": "wmx",
    "x-ms-wvx": "wvx",
    "x-msvideo": "avi",
    "x-sgi-movie": "movie",
    "x-matroska": [
      "mpv",
      "mkv",
      "mk3d",
      "mks"
    ],
    "3gpp2": "3g2",
    h261: "h261",
    h263: "h263",
    h264: "h264",
    jpeg: "jpgv",
    jpm: [
      "jpm",
      "jpgm"
    ],
    mj2: [
      "mj2",
      "mjp2"
    ],
    "vnd.dece.hd": [
      "uvh",
      "uvvh"
    ],
    "vnd.dece.mobile": [
      "uvm",
      "uvvm"
    ],
    "vnd.dece.pd": [
      "uvp",
      "uvvp"
    ],
    "vnd.dece.sd": [
      "uvs",
      "uvvs"
    ],
    "vnd.dece.video": [
      "uvv",
      "uvvv"
    ],
    "vnd.dvb.file": "dvb",
    "vnd.fvt": "fvt",
    "vnd.ms-playready.media.pyv": "pyv",
    "vnd.uvvu.mp4": [
      "uvu",
      "uvvu"
    ],
    "vnd.vivo": "viv",
    webm: "webm",
    "x-f4v": "f4v",
    "x-m4v": "m4v",
    "x-ms-vob": "vob",
    "x-smv": "smv",
    mp2t: "ts"
  },
  "x-conference": {
    "x-cooltalk": "ice"
  },
  "x-world": {
    "x-vrml": [
      "vrm",
      "flr",
      "wrz",
      "xaf",
      "xof"
    ]
  }
};
(() => {
  const t = {};
  for (const n of Object.keys(Lt))
    for (const e of Object.keys(Lt[n])) {
      const i = Lt[n][e];
      if (typeof i == "string")
        t[i] = n + "/" + e;
      else
        for (let r = 0; r < i.length; r++)
          t[i[r]] = n + "/" + e;
    }
  return t;
})();
const ri = [];
for (let t = 0; t < 256; t++) {
  let n = t;
  for (let e = 0; e < 8; e++)
    n & 1 ? n = n >>> 1 ^ 3988292384 : n = n >>> 1;
  ri[t] = n;
}
class ht {
  constructor(n) {
    this.crc = n || -1;
  }
  append(n) {
    let e = this.crc | 0;
    for (let i = 0, r = n.length | 0; i < r; i++)
      e = e >>> 8 ^ ri[(e ^ n[i]) & 255];
    this.crc = e;
  }
  get() {
    return ~this.crc;
  }
}
class si extends TransformStream {
  constructor() {
    let n;
    const e = new ht();
    super({
      transform(i, r) {
        e.append(i), r.enqueue(i);
      },
      flush() {
        const i = new Uint8Array(4);
        new DataView(i.buffer).setUint32(0, e.get()), n.value = i;
      }
    }), n = this;
  }
}
function Yr(t) {
  if (typeof TextEncoder == Ie) {
    t = unescape(encodeURIComponent(t));
    const n = new Uint8Array(t.length);
    for (let e = 0; e < n.length; e++)
      n[e] = t.charCodeAt(e);
    return n;
  } else
    return new TextEncoder().encode(t);
}
const oe = {
  /**
   * Concatenate two bit arrays.
   * @param {bitArray} a1 The first array.
   * @param {bitArray} a2 The second array.
   * @return {bitArray} The concatenation of a1 and a2.
   */
  concat(t, n) {
    if (t.length === 0 || n.length === 0)
      return t.concat(n);
    const e = t[t.length - 1], i = oe.getPartial(e);
    return i === 32 ? t.concat(n) : oe._shiftRight(n, i, e | 0, t.slice(0, t.length - 1));
  },
  /**
   * Find the length of an array of bits.
   * @param {bitArray} a The array.
   * @return {Number} The length of a, in bits.
   */
  bitLength(t) {
    const n = t.length;
    if (n === 0)
      return 0;
    const e = t[n - 1];
    return (n - 1) * 32 + oe.getPartial(e);
  },
  /**
   * Truncate an array.
   * @param {bitArray} a The array.
   * @param {Number} len The length to truncate to, in bits.
   * @return {bitArray} A new array, truncated to len bits.
   */
  clamp(t, n) {
    if (t.length * 32 < n)
      return t;
    t = t.slice(0, Math.ceil(n / 32));
    const e = t.length;
    return n = n & 31, e > 0 && n && (t[e - 1] = oe.partial(n, t[e - 1] & 2147483648 >> n - 1, 1)), t;
  },
  /**
   * Make a partial word for a bit array.
   * @param {Number} len The number of bits in the word.
   * @param {Number} x The bits.
   * @param {Number} [_end=0] Pass 1 if x has already been shifted to the high side.
   * @return {Number} The partial word.
   */
  partial(t, n, e) {
    return t === 32 ? n : (e ? n | 0 : n << 32 - t) + t * 1099511627776;
  },
  /**
   * Get the number of bits used by a partial word.
   * @param {Number} x The partial word.
   * @return {Number} The number of bits used by the partial word.
   */
  getPartial(t) {
    return Math.round(t / 1099511627776) || 32;
  },
  /** Shift an array right.
   * @param {bitArray} a The array to shift.
   * @param {Number} shift The number of bits to shift.
   * @param {Number} [carry=0] A byte to carry in
   * @param {bitArray} [out=[]] An array to prepend to the output.
   * @private
   */
  _shiftRight(t, n, e, i) {
    for (i === void 0 && (i = []); n >= 32; n -= 32)
      i.push(e), e = 0;
    if (n === 0)
      return i.concat(t);
    for (let a = 0; a < t.length; a++)
      i.push(e | t[a] >>> n), e = t[a] << 32 - n;
    const r = t.length ? t[t.length - 1] : 0, s = oe.getPartial(r);
    return i.push(oe.partial(n + s & 31, n + s > 32 ? e : i.pop(), 1)), i;
  }
}, wt = {
  bytes: {
    /** Convert from a bitArray to an array of bytes. */
    fromBits(t) {
      const e = oe.bitLength(t) / 8, i = new Uint8Array(e);
      let r;
      for (let s = 0; s < e; s++)
        s & 3 || (r = t[s / 4]), i[s] = r >>> 24, r <<= 8;
      return i;
    },
    /** Convert from an array of bytes to a bitArray. */
    toBits(t) {
      const n = [];
      let e, i = 0;
      for (e = 0; e < t.length; e++)
        i = i << 8 | t[e], (e & 3) === 3 && (n.push(i), i = 0);
      return e & 3 && n.push(oe.partial(8 * (e & 3), i)), n;
    }
  }
}, ai = {};
ai.sha1 = class {
  constructor(t) {
    const n = this;
    n.blockSize = 512, n._init = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], n._key = [1518500249, 1859775393, 2400959708, 3395469782], t ? (n._h = t._h.slice(0), n._buffer = t._buffer.slice(0), n._length = t._length) : n.reset();
  }
  /**
   * Reset the hash state.
   * @return this
   */
  reset() {
    const t = this;
    return t._h = t._init.slice(0), t._buffer = [], t._length = 0, t;
  }
  /**
   * Input several words to the hash.
   * @param {bitArray|String} data the data to hash.
   * @return this
   */
  update(t) {
    const n = this;
    typeof t == "string" && (t = wt.utf8String.toBits(t));
    const e = n._buffer = oe.concat(n._buffer, t), i = n._length, r = n._length = i + oe.bitLength(t);
    if (r > 9007199254740991)
      throw new Error("Cannot hash more than 2^53 - 1 bits");
    const s = new Uint32Array(e);
    let a = 0;
    for (let d = n.blockSize + i - (n.blockSize + i & n.blockSize - 1); d <= r; d += n.blockSize)
      n._block(s.subarray(16 * a, 16 * (a + 1))), a += 1;
    return e.splice(0, 16 * a), n;
  }
  /**
   * Complete hashing and output the hash value.
   * @return {bitArray} The hash value, an array of 5 big-endian words. TODO
   */
  finalize() {
    const t = this;
    let n = t._buffer;
    const e = t._h;
    n = oe.concat(n, [oe.partial(1, 1)]);
    for (let i = n.length + 2; i & 15; i++)
      n.push(0);
    for (n.push(Math.floor(t._length / 4294967296)), n.push(t._length | 0); n.length; )
      t._block(n.splice(0, 16));
    return t.reset(), e;
  }
  /**
   * The SHA-1 logical functions f(0), f(1), ..., f(79).
   * @private
   */
  _f(t, n, e, i) {
    if (t <= 19)
      return n & e | ~n & i;
    if (t <= 39)
      return n ^ e ^ i;
    if (t <= 59)
      return n & e | n & i | e & i;
    if (t <= 79)
      return n ^ e ^ i;
  }
  /**
   * Circular left-shift operator.
   * @private
   */
  _S(t, n) {
    return n << t | n >>> 32 - t;
  }
  /**
   * Perform one cycle of SHA-1.
   * @param {Uint32Array|bitArray} words one block of words.
   * @private
   */
  _block(t) {
    const n = this, e = n._h, i = Array(80);
    for (let x = 0; x < 16; x++)
      i[x] = t[x];
    let r = e[0], s = e[1], a = e[2], d = e[3], o = e[4];
    for (let x = 0; x <= 79; x++) {
      x >= 16 && (i[x] = n._S(1, i[x - 3] ^ i[x - 8] ^ i[x - 14] ^ i[x - 16]));
      const u = n._S(5, r) + n._f(x, s, a, d) + o + i[x] + n._key[Math.floor(x / 20)] | 0;
      o = d, d = a, a = n._S(30, s), s = r, r = u;
    }
    e[0] = e[0] + r | 0, e[1] = e[1] + s | 0, e[2] = e[2] + a | 0, e[3] = e[3] + d | 0, e[4] = e[4] + o | 0;
  }
};
const oi = {};
oi.aes = class {
  constructor(t) {
    const n = this;
    n._tables = [[[], [], [], [], []], [[], [], [], [], []]], n._tables[0][0][0] || n._precompute();
    const e = n._tables[0][4], i = n._tables[1], r = t.length;
    let s, a, d, o = 1;
    if (r !== 4 && r !== 6 && r !== 8)
      throw new Error("invalid aes key size");
    for (n._key = [a = t.slice(0), d = []], s = r; s < 4 * r + 28; s++) {
      let x = a[s - 1];
      (s % r === 0 || r === 8 && s % r === 4) && (x = e[x >>> 24] << 24 ^ e[x >> 16 & 255] << 16 ^ e[x >> 8 & 255] << 8 ^ e[x & 255], s % r === 0 && (x = x << 8 ^ x >>> 24 ^ o << 24, o = o << 1 ^ (o >> 7) * 283)), a[s] = a[s - r] ^ x;
    }
    for (let x = 0; s; x++, s--) {
      const u = a[x & 3 ? s : s - 4];
      s <= 4 || x < 4 ? d[x] = u : d[x] = i[0][e[u >>> 24]] ^ i[1][e[u >> 16 & 255]] ^ i[2][e[u >> 8 & 255]] ^ i[3][e[u & 255]];
    }
  }
  // public
  /* Something like this might appear here eventually
  name: "AES",
  blockSize: 4,
  keySizes: [4,6,8],
  */
  /**
   * Encrypt an array of 4 big-endian words.
   * @param {Array} data The plaintext.
   * @return {Array} The ciphertext.
   */
  encrypt(t) {
    return this._crypt(t, 0);
  }
  /**
   * Decrypt an array of 4 big-endian words.
   * @param {Array} data The ciphertext.
   * @return {Array} The plaintext.
   */
  decrypt(t) {
    return this._crypt(t, 1);
  }
  /**
   * Expand the S-box tables.
   *
   * @private
   */
  _precompute() {
    const t = this._tables[0], n = this._tables[1], e = t[4], i = n[4], r = [], s = [];
    let a, d, o, x;
    for (let u = 0; u < 256; u++)
      s[(r[u] = u << 1 ^ (u >> 7) * 283) ^ u] = u;
    for (let u = a = 0; !e[u]; u ^= d || 1, a = s[a] || 1) {
      let p = a ^ a << 1 ^ a << 2 ^ a << 3 ^ a << 4;
      p = p >> 8 ^ p & 255 ^ 99, e[u] = p, i[p] = u, x = r[o = r[d = r[u]]];
      let m = x * 16843009 ^ o * 65537 ^ d * 257 ^ u * 16843008, v = r[p] * 257 ^ p * 16843008;
      for (let D = 0; D < 4; D++)
        t[D][u] = v = v << 24 ^ v >>> 8, n[D][p] = m = m << 24 ^ m >>> 8;
    }
    for (let u = 0; u < 5; u++)
      t[u] = t[u].slice(0), n[u] = n[u].slice(0);
  }
  /**
   * Encryption and decryption core.
   * @param {Array} input Four words to be encrypted or decrypted.
   * @param dir The direction, 0 for encrypt and 1 for decrypt.
   * @return {Array} The four encrypted or decrypted words.
   * @private
   */
  _crypt(t, n) {
    if (t.length !== 4)
      throw new Error("invalid aes block size");
    const e = this._key[n], i = e.length / 4 - 2, r = [0, 0, 0, 0], s = this._tables[n], a = s[0], d = s[1], o = s[2], x = s[3], u = s[4];
    let p = t[0] ^ e[0], m = t[n ? 3 : 1] ^ e[1], v = t[2] ^ e[2], D = t[n ? 1 : 3] ^ e[3], f = 4, c, l, _;
    for (let g = 0; g < i; g++)
      c = a[p >>> 24] ^ d[m >> 16 & 255] ^ o[v >> 8 & 255] ^ x[D & 255] ^ e[f], l = a[m >>> 24] ^ d[v >> 16 & 255] ^ o[D >> 8 & 255] ^ x[p & 255] ^ e[f + 1], _ = a[v >>> 24] ^ d[D >> 16 & 255] ^ o[p >> 8 & 255] ^ x[m & 255] ^ e[f + 2], D = a[D >>> 24] ^ d[p >> 16 & 255] ^ o[m >> 8 & 255] ^ x[v & 255] ^ e[f + 3], f += 4, p = c, m = l, v = _;
    for (let g = 0; g < 4; g++)
      r[n ? 3 & -g : g] = u[p >>> 24] << 24 ^ u[m >> 16 & 255] << 16 ^ u[v >> 8 & 255] << 8 ^ u[D & 255] ^ e[f++], c = p, p = m, m = v, v = D, D = c;
    return r;
  }
};
const Vr = {
  /** 
   * Generate random words with pure js, cryptographically not as strong & safe as native implementation.
   * @param {TypedArray} typedArray The array to fill.
   * @return {TypedArray} The random values.
   */
  getRandomValues(t) {
    const n = new Uint32Array(t.buffer), e = (i) => {
      let r = 987654321;
      const s = 4294967295;
      return function() {
        return r = 36969 * (r & 65535) + (r >> 16) & s, i = 18e3 * (i & 65535) + (i >> 16) & s, (((r << 16) + i & s) / 4294967296 + 0.5) * (Math.random() > 0.5 ? 1 : -1);
      };
    };
    for (let i = 0, r; i < t.length; i += 4) {
      const s = e((r || Math.random()) * 4294967296);
      r = s() * 987654071, n[i / 4] = s() * 4294967296 | 0;
    }
    return t;
  }
}, ci = {};
ci.ctrGladman = class {
  constructor(t, n) {
    this._prf = t, this._initIv = n, this._iv = n;
  }
  reset() {
    this._iv = this._initIv;
  }
  /** Input some data to calculate.
   * @param {bitArray} data the data to process, it must be intergral multiple of 128 bits unless it's the last.
   */
  update(t) {
    return this.calculate(this._prf, t, this._iv);
  }
  incWord(t) {
    if ((t >> 24 & 255) === 255) {
      let n = t >> 16 & 255, e = t >> 8 & 255, i = t & 255;
      n === 255 ? (n = 0, e === 255 ? (e = 0, i === 255 ? i = 0 : ++i) : ++e) : ++n, t = 0, t += n << 16, t += e << 8, t += i;
    } else
      t += 1 << 24;
    return t;
  }
  incCounter(t) {
    (t[0] = this.incWord(t[0])) === 0 && (t[1] = this.incWord(t[1]));
  }
  calculate(t, n, e) {
    let i;
    if (!(i = n.length))
      return [];
    const r = oe.bitLength(n);
    for (let s = 0; s < i; s += 4) {
      this.incCounter(e);
      const a = t.encrypt(e);
      n[s] ^= a[0], n[s + 1] ^= a[1], n[s + 2] ^= a[2], n[s + 3] ^= a[3];
    }
    return oe.clamp(n, r);
  }
};
const Pe = {
  importKey(t) {
    return new Pe.hmacSha1(wt.bytes.toBits(t));
  },
  pbkdf2(t, n, e, i) {
    if (e = e || 1e4, i < 0 || e < 0)
      throw new Error("invalid params to pbkdf2");
    const r = (i >> 5) + 1 << 2;
    let s, a, d, o, x;
    const u = new ArrayBuffer(r), p = new DataView(u);
    let m = 0;
    const v = oe;
    for (n = wt.bytes.toBits(n), x = 1; m < (r || 1); x++) {
      for (s = a = t.encrypt(v.concat(n, [x])), d = 1; d < e; d++)
        for (a = t.encrypt(a), o = 0; o < a.length; o++)
          s[o] ^= a[o];
      for (d = 0; m < (r || 1) && d < s.length; d++)
        p.setInt32(m, s[d]), m += 4;
    }
    return u.slice(0, i / 8);
  }
};
Pe.hmacSha1 = class {
  constructor(t) {
    const n = this, e = n._hash = ai.sha1, i = [[], []];
    n._baseHash = [new e(), new e()];
    const r = n._baseHash[0].blockSize / 32;
    t.length > r && (t = new e().update(t).finalize());
    for (let s = 0; s < r; s++)
      i[0][s] = t[s] ^ 909522486, i[1][s] = t[s] ^ 1549556828;
    n._baseHash[0].update(i[0]), n._baseHash[1].update(i[1]), n._resultHash = new e(n._baseHash[0]);
  }
  reset() {
    const t = this;
    t._resultHash = new t._hash(t._baseHash[0]), t._updated = !1;
  }
  update(t) {
    const n = this;
    n._updated = !0, n._resultHash.update(t);
  }
  digest() {
    const t = this, n = t._resultHash.finalize(), e = new t._hash(t._baseHash[1]).update(n).finalize();
    return t.reset(), e;
  }
  encrypt(t) {
    if (this._updated)
      throw new Error("encrypt on already updated hmac called!");
    return this.update(t), this.digest(t);
  }
};
const Xr = typeof crypto != Ie && typeof crypto.getRandomValues == tt, li = "Invalid password", fi = "Invalid signature", $t = "zipjs-abort-check-password";
function di(t) {
  return Xr ? crypto.getRandomValues(t) : Vr.getRandomValues(t);
}
const He = 16, Jr = "raw", ui = { name: "PBKDF2" }, Qr = { name: "HMAC" }, zr = "SHA-1", es = Object.assign({ hash: Qr }, ui), Bt = Object.assign({ iterations: 1e3, hash: { name: zr } }, ui), ts = ["deriveBits"], Qe = [8, 12, 16], Je = [16, 24, 32], Ce = 10, ns = [0, 0, 0, 0], yt = typeof crypto != Ie, nt = yt && crypto.subtle, mi = yt && typeof nt != Ie, we = wt.bytes, is = oi.aes, rs = ci.ctrGladman, ss = Pe.hmacSha1;
let Ln = yt && mi && typeof nt.importKey == tt, Nn = yt && mi && typeof nt.deriveBits == tt;
class as extends TransformStream {
  constructor({ password: n, rawPassword: e, signed: i, encryptionStrength: r, checkPasswordOnly: s }) {
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((a) => this.resolveReady = a),
          password: _i(n, e),
          signed: i,
          strength: r - 1,
          pending: new Uint8Array()
        });
      },
      async transform(a, d) {
        const o = this, {
          password: x,
          strength: u,
          resolveReady: p,
          ready: m
        } = o;
        x ? (await cs(o, u, x, me(a, 0, Qe[u] + 2)), a = me(a, Qe[u] + 2), s ? d.error(new Error($t)) : p()) : await m;
        const v = new Uint8Array(a.length - Ce - (a.length - Ce) % He);
        d.enqueue(pi(o, a, v, 0, Ce, !0));
      },
      async flush(a) {
        const {
          signed: d,
          ctr: o,
          hmac: x,
          pending: u,
          ready: p
        } = this;
        if (x && o) {
          await p;
          const m = me(u, 0, u.length - Ce), v = me(u, u.length - Ce);
          let D = new Uint8Array();
          if (m.length) {
            const f = et(we, m);
            x.update(f);
            const c = o.update(f);
            D = ze(we, c);
          }
          if (d) {
            const f = me(ze(we, x.digest()), 0, Ce);
            for (let c = 0; c < Ce; c++)
              if (f[c] != v[c])
                throw new Error(fi);
          }
          a.enqueue(D);
        }
      }
    });
  }
}
class os extends TransformStream {
  constructor({ password: n, rawPassword: e, encryptionStrength: i }) {
    let r;
    super({
      start() {
        Object.assign(this, {
          ready: new Promise((s) => this.resolveReady = s),
          password: _i(n, e),
          strength: i - 1,
          pending: new Uint8Array()
        });
      },
      async transform(s, a) {
        const d = this, {
          password: o,
          strength: x,
          resolveReady: u,
          ready: p
        } = d;
        let m = new Uint8Array();
        o ? (m = await ls(d, x, o), u()) : await p;
        const v = new Uint8Array(m.length + s.length - s.length % He);
        v.set(m, 0), a.enqueue(pi(d, s, v, m.length, 0));
      },
      async flush(s) {
        const {
          ctr: a,
          hmac: d,
          pending: o,
          ready: x
        } = this;
        if (d && a) {
          await x;
          let u = new Uint8Array();
          if (o.length) {
            const p = a.update(et(we, o));
            d.update(p), u = ze(we, p);
          }
          r.signature = ze(we, d.digest()).slice(0, Ce), s.enqueue(Kt(u, r.signature));
        }
      }
    }), r = this;
  }
}
function pi(t, n, e, i, r, s) {
  const {
    ctr: a,
    hmac: d,
    pending: o
  } = t, x = n.length - r;
  o.length && (n = Kt(o, n), e = us(e, x - x % He));
  let u;
  for (u = 0; u <= x - He; u += He) {
    const p = et(we, me(n, u, u + He));
    s && d.update(p);
    const m = a.update(p);
    s || d.update(m), e.set(ze(we, m), u + i);
  }
  return t.pending = me(n, u), e;
}
async function cs(t, n, e, i) {
  const r = await xi(t, n, e, me(i, 0, Qe[n])), s = me(i, Qe[n]);
  if (r[0] != s[0] || r[1] != s[1])
    throw new Error(li);
}
async function ls(t, n, e) {
  const i = di(new Uint8Array(Qe[n])), r = await xi(t, n, e, i);
  return Kt(i, r);
}
async function xi(t, n, e, i) {
  t.password = null;
  const r = await fs(Jr, e, es, !1, ts), s = await ds(Object.assign({ salt: i }, Bt), r, 8 * (Je[n] * 2 + 2)), a = new Uint8Array(s), d = et(we, me(a, 0, Je[n])), o = et(we, me(a, Je[n], Je[n] * 2)), x = me(a, Je[n] * 2);
  return Object.assign(t, {
    keys: {
      key: d,
      authentication: o,
      passwordVerification: x
    },
    ctr: new rs(new is(d), Array.from(ns)),
    hmac: new ss(o)
  }), x;
}
async function fs(t, n, e, i, r) {
  if (Ln)
    try {
      return await nt.importKey(t, n, e, i, r);
    } catch {
      return Ln = !1, Pe.importKey(n);
    }
  else
    return Pe.importKey(n);
}
async function ds(t, n, e) {
  if (Nn)
    try {
      return await nt.deriveBits(t, n, e);
    } catch {
      return Nn = !1, Pe.pbkdf2(n, t.salt, Bt.iterations, e);
    }
  else
    return Pe.pbkdf2(n, t.salt, Bt.iterations, e);
}
function _i(t, n) {
  return n === ce ? Yr(t) : n;
}
function Kt(t, n) {
  let e = t;
  return t.length + n.length && (e = new Uint8Array(t.length + n.length), e.set(t, 0), e.set(n, t.length)), e;
}
function us(t, n) {
  if (n && n > t.length) {
    const e = t;
    t = new Uint8Array(n), t.set(e, 0);
  }
  return t;
}
function me(t, n, e) {
  return t.subarray(n, e);
}
function ze(t, n) {
  return t.fromBits(n);
}
function et(t, n) {
  return t.toBits(n);
}
const Ge = 12;
class ms extends TransformStream {
  constructor({ password: n, passwordVerification: e, checkPasswordOnly: i }) {
    super({
      start() {
        Object.assign(this, {
          password: n,
          passwordVerification: e
        }), hi(this, n);
      },
      transform(r, s) {
        const a = this;
        if (a.password) {
          const d = jn(a, r.subarray(0, Ge));
          if (a.password = null, d[Ge - 1] != a.passwordVerification)
            throw new Error(li);
          r = r.subarray(Ge);
        }
        i ? s.error(new Error($t)) : s.enqueue(jn(a, r));
      }
    });
  }
}
class ps extends TransformStream {
  constructor({ password: n, passwordVerification: e }) {
    super({
      start() {
        Object.assign(this, {
          password: n,
          passwordVerification: e
        }), hi(this, n);
      },
      transform(i, r) {
        const s = this;
        let a, d;
        if (s.password) {
          s.password = null;
          const o = di(new Uint8Array(Ge));
          o[Ge - 1] = s.passwordVerification, a = new Uint8Array(i.length + o.length), a.set(Pn(s, o), 0), d = Ge;
        } else
          a = new Uint8Array(i.length), d = 0;
        a.set(Pn(s, i), d), r.enqueue(a);
      }
    });
  }
}
function jn(t, n) {
  const e = new Uint8Array(n.length);
  for (let i = 0; i < n.length; i++)
    e[i] = wi(t) ^ n[i], Yt(t, e[i]);
  return e;
}
function Pn(t, n) {
  const e = new Uint8Array(n.length);
  for (let i = 0; i < n.length; i++)
    e[i] = wi(t) ^ n[i], Yt(t, n[i]);
  return e;
}
function hi(t, n) {
  const e = [305419896, 591751049, 878082192];
  Object.assign(t, {
    keys: e,
    crcKey0: new ht(e[0]),
    crcKey2: new ht(e[2])
  });
  for (let i = 0; i < n.length; i++)
    Yt(t, n.charCodeAt(i));
}
function Yt(t, n) {
  let [e, i, r] = t.keys;
  t.crcKey0.append([n]), e = ~t.crcKey0.get(), i = Un(Math.imul(Un(i + bi(e)), 134775813) + 1), t.crcKey2.append([i >>> 24]), r = ~t.crcKey2.get(), t.keys = [e, i, r];
}
function wi(t) {
  const n = t.keys[2] | 2;
  return bi(Math.imul(n, n ^ 1) >>> 8);
}
function bi(t) {
  return t & 255;
}
function Un(t) {
  return t & 4294967295;
}
const Mn = "deflate-raw";
class xs extends TransformStream {
  constructor(n, { chunkSize: e, CompressionStream: i, CompressionStreamNative: r }) {
    super({});
    const { compressed: s, encrypted: a, useCompressionStream: d, zipCrypto: o, signed: x, level: u } = n, p = this;
    let m, v, D = gi(super.readable);
    (!a || o) && x && (m = new si(), D = be(D, m)), s && (D = yi(D, d, { level: u, chunkSize: e }, r, i)), a && (o ? D = be(D, new ps(n)) : (v = new os(n), D = be(D, v))), vi(p, D, () => {
      let f;
      a && !o && (f = v.signature), (!a || o) && x && (f = new DataView(m.value.buffer).getUint32(0)), p.signature = f;
    });
  }
}
class _s extends TransformStream {
  constructor(n, { chunkSize: e, DecompressionStream: i, DecompressionStreamNative: r }) {
    super({});
    const { zipCrypto: s, encrypted: a, signed: d, signature: o, compressed: x, useCompressionStream: u } = n;
    let p, m, v = gi(super.readable);
    a && (s ? v = be(v, new ms(n)) : (m = new as(n), v = be(v, m))), x && (v = yi(v, u, { chunkSize: e }, r, i)), (!a || s) && d && (p = new si(), v = be(v, p)), vi(this, v, () => {
      if ((!a || s) && d) {
        const D = new DataView(p.value.buffer);
        if (o != D.getUint32(0, !1))
          throw new Error(fi);
      }
    });
  }
}
function gi(t) {
  return be(t, new TransformStream({
    transform(n, e) {
      n && n.length && e.enqueue(n);
    }
  }));
}
function vi(t, n, e) {
  n = be(n, new TransformStream({ flush: e })), Object.defineProperty(t, "readable", {
    get() {
      return n;
    }
  });
}
function yi(t, n, e, i, r) {
  try {
    const s = n && i ? i : r;
    t = be(t, new s(Mn, e));
  } catch {
    if (n)
      try {
        t = be(t, new r(Mn, e));
      } catch {
        return t;
      }
    else
      return t;
  }
  return t;
}
function be(t, n) {
  return t.pipeThrough(n);
}
const hs = "message", ws = "start", bs = "pull", Zn = "data", gs = "ack", Bn = "close", vs = "deflate", ki = "inflate";
class ys extends TransformStream {
  constructor(n, e) {
    super({});
    const i = this, { codecType: r } = n;
    let s;
    r.startsWith(vs) ? s = xs : r.startsWith(ki) && (s = _s);
    let a = 0, d = 0;
    const o = new s(n, e), x = super.readable, u = new TransformStream({
      transform(m, v) {
        m && m.length && (d += m.length, v.enqueue(m));
      },
      flush() {
        Object.assign(i, {
          inputSize: d
        });
      }
    }), p = new TransformStream({
      transform(m, v) {
        m && m.length && (a += m.length, v.enqueue(m));
      },
      flush() {
        const { signature: m } = o;
        Object.assign(i, {
          signature: m,
          outputSize: a,
          inputSize: d
        });
      }
    });
    Object.defineProperty(i, "readable", {
      get() {
        return x.pipeThrough(u).pipeThrough(o).pipeThrough(p);
      }
    });
  }
}
class ks extends TransformStream {
  constructor(n) {
    let e;
    super({
      transform: i,
      flush(r) {
        e && e.length && r.enqueue(e);
      }
    });
    function i(r, s) {
      if (e) {
        const a = new Uint8Array(e.length + r.length);
        a.set(e), a.set(r, e.length), r = a, e = null;
      }
      r.length > n ? (s.enqueue(r.slice(0, n)), i(r.slice(n), s)) : e = r;
    }
  }
}
let Ei = typeof Worker != Ie;
class Nt {
  constructor(n, { readable: e, writable: i }, { options: r, config: s, streamOptions: a, useWebWorkers: d, transferStreams: o, scripts: x }, u) {
    const { signal: p } = a;
    return Object.assign(n, {
      busy: !0,
      readable: e.pipeThrough(new ks(s.chunkSize)).pipeThrough(new Es(e, a), { signal: p }),
      writable: i,
      options: Object.assign({}, r),
      scripts: x,
      transferStreams: o,
      terminate() {
        return new Promise((m) => {
          const { worker: v, busy: D } = n;
          v ? (D ? n.resolveTerminated = m : (v.terminate(), m()), n.interface = null) : m();
        });
      },
      onTaskFinished() {
        const { resolveTerminated: m } = n;
        m && (n.resolveTerminated = null, n.terminated = !0, n.worker.terminate(), m()), n.busy = !1, u(n);
      }
    }), (d && Ei ? Ss : Si)(n, s);
  }
}
class Es extends TransformStream {
  constructor(n, { onstart: e, onprogress: i, size: r, onend: s }) {
    let a = 0;
    super({
      async start() {
        e && await jt(e, r);
      },
      async transform(d, o) {
        a += d.length, i && await jt(i, a, r), o.enqueue(d);
      },
      async flush() {
        n.size = a, s && await jt(s, a);
      }
    });
  }
}
async function jt(t, ...n) {
  try {
    await t(...n);
  } catch {
  }
}
function Si(t, n) {
  return {
    run: () => As(t, n)
  };
}
function Ss(t, n) {
  const { baseURL: e, chunkSize: i } = n;
  if (!t.interface) {
    let r;
    try {
      r = Cs(t.scripts[0], e, t);
    } catch {
      return Ei = !1, Si(t, n);
    }
    Object.assign(t, {
      worker: r,
      interface: {
        run: () => Ts(t, { chunkSize: i })
      }
    });
  }
  return t.interface;
}
async function As({ options: t, readable: n, writable: e, onTaskFinished: i }, r) {
  try {
    const s = new ys(t, r);
    await n.pipeThrough(s).pipeTo(e, { preventClose: !0, preventAbort: !0 });
    const {
      signature: a,
      inputSize: d,
      outputSize: o
    } = s;
    return {
      signature: a,
      inputSize: d,
      outputSize: o
    };
  } finally {
    i();
  }
}
async function Ts(t, n) {
  let e, i;
  const r = new Promise((m, v) => {
    e = m, i = v;
  });
  Object.assign(t, {
    reader: null,
    writer: null,
    resolveResult: e,
    rejectResult: i,
    result: r
  });
  const { readable: s, options: a, scripts: d } = t, { writable: o, closed: x } = Rs(t.writable), u = pt({
    type: ws,
    scripts: d.slice(1),
    options: a,
    config: n,
    readable: s,
    writable: o
  }, t);
  u || Object.assign(t, {
    reader: s.getReader(),
    writer: o.getWriter()
  });
  const p = await r;
  return u || await o.getWriter().close(), await x, p;
}
function Rs(t) {
  let n;
  const e = new Promise((r) => n = r);
  return { writable: new WritableStream({
    async write(r) {
      const s = t.getWriter();
      await s.ready, await s.write(r), s.releaseLock();
    },
    close() {
      n();
    },
    abort(r) {
      return t.getWriter().abort(r);
    }
  }), closed: e };
}
let Hn = !0, Gn = !0;
function Cs(t, n, e) {
  const i = { type: "module" };
  let r, s;
  typeof t == tt && (t = t());
  try {
    r = new URL(t, n);
  } catch {
    r = t;
  }
  if (Hn)
    try {
      s = new Worker(r);
    } catch {
      Hn = !1, s = new Worker(r, i);
    }
  else
    s = new Worker(r, i);
  return s.addEventListener(hs, (a) => Os(a, e)), s;
}
function pt(t, { worker: n, writer: e, onTaskFinished: i, transferStreams: r }) {
  try {
    let { value: s, readable: a, writable: d } = t;
    const o = [];
    if (s && (s.byteLength < s.buffer.byteLength ? t.value = s.buffer.slice(0, s.byteLength) : t.value = s.buffer, o.push(t.value)), r && Gn ? (a && o.push(a), d && o.push(d)) : t.readable = t.writable = null, o.length)
      try {
        return n.postMessage(t, o), !0;
      } catch {
        Gn = !1, t.readable = t.writable = null, n.postMessage(t);
      }
    else
      n.postMessage(t);
  } catch (s) {
    throw e && e.releaseLock(), i(), s;
  }
}
async function Os({ data: t }, n) {
  const { type: e, value: i, messageId: r, result: s, error: a } = t, { reader: d, writer: o, resolveResult: x, rejectResult: u, onTaskFinished: p } = n;
  try {
    if (a) {
      const { message: v, stack: D, code: f, name: c } = a, l = new Error(v);
      Object.assign(l, { stack: D, code: f, name: c }), m(l);
    } else {
      if (e == bs) {
        const { value: v, done: D } = await d.read();
        pt({ type: Zn, value: v, done: D, messageId: r }, n);
      }
      e == Zn && (await o.ready, await o.write(new Uint8Array(i)), pt({ type: gs, messageId: r }, n)), e == Bn && m(null, s);
    }
  } catch (v) {
    pt({ type: Bn, messageId: r }, n), m(v);
  }
  function m(v, D) {
    v ? u(v) : x(D), o && o.releaseLock(), p();
  }
}
let Ne = [];
const Pt = [];
let qn = 0;
async function Ds(t, n) {
  const { options: e, config: i } = n, { transferStreams: r, useWebWorkers: s, useCompressionStream: a, codecType: d, compressed: o, signed: x, encrypted: u } = e, { workerScripts: p, maxWorkers: m } = i;
  n.transferStreams = r || r === ce;
  const v = !o && !x && !u && !n.transferStreams;
  return n.useWebWorkers = !v && (s || s === ce && i.useWebWorkers), n.scripts = n.useWebWorkers && p ? p[d] : [], e.useCompressionStream = a || a === ce && i.useCompressionStream, (await D()).run();
  async function D() {
    const c = Ne.find((l) => !l.busy);
    if (c)
      return Wn(c), new Nt(c, t, n, f);
    if (Ne.length < m) {
      const l = { indexWorker: qn };
      return qn++, Ne.push(l), new Nt(l, t, n, f);
    } else
      return new Promise((l) => Pt.push({ resolve: l, stream: t, workerOptions: n }));
  }
  function f(c) {
    if (Pt.length) {
      const [{ resolve: l, stream: _, workerOptions: g }] = Pt.splice(0, 1);
      l(new Nt(c, _, g, f));
    } else c.worker ? (Wn(c), Is(c, n)) : Ne = Ne.filter((l) => l != c);
  }
}
function Is(t, n) {
  const { config: e } = n, { terminateWorkerTimeout: i } = e;
  Number.isFinite(i) && i >= 0 && (t.terminated ? t.terminated = !1 : t.terminateTimeout = setTimeout(async () => {
    Ne = Ne.filter((r) => r != t);
    try {
      await t.terminate();
    } catch {
    }
  }, i));
}
function Wn(t) {
  const { terminateTimeout: n } = t;
  n && (clearTimeout(n), t.terminateTimeout = null);
}
function Fs(t, n = {}) {
  const e = `const{Array:e,Object:t,Number:n,Math:r,Error:s,Uint8Array:i,Uint16Array:o,Uint32Array:c,Int32Array:f,Map:a,DataView:l,Promise:u,TextEncoder:w,crypto:h,postMessage:d,TransformStream:p,ReadableStream:y,WritableStream:m,CompressionStream:b,DecompressionStream:g}=self,k=void 0,v="undefined",S="function";class z{constructor(e){return class extends p{constructor(t,n){const r=new e(n);super({transform(e,t){t.enqueue(r.append(e))},flush(e){const t=r.flush();t&&e.enqueue(t)}})}}}}const C=[];for(let e=0;256>e;e++){let t=e;for(let e=0;8>e;e++)1&t?t=t>>>1^3988292384:t>>>=1;C[e]=t}class x{constructor(e){this.t=e||-1}append(e){let t=0|this.t;for(let n=0,r=0|e.length;r>n;n++)t=t>>>8^C[255&(t^e[n])];this.t=t}get(){return~this.t}}class A extends p{constructor(){let e;const t=new x;super({transform(e,n){t.append(e),n.enqueue(e)},flush(){const n=new i(4);new l(n.buffer).setUint32(0,t.get()),e.value=n}}),e=this}}const _={concat(e,t){if(0===e.length||0===t.length)return e.concat(t);const n=e[e.length-1],r=_.i(n);return 32===r?e.concat(t):_.o(t,r,0|n,e.slice(0,e.length-1))},l(e){const t=e.length;if(0===t)return 0;const n=e[t-1];return 32*(t-1)+_.i(n)},u(e,t){if(32*e.length<t)return e;const n=(e=e.slice(0,r.ceil(t/32))).length;return t&=31,n>0&&t&&(e[n-1]=_.h(t,e[n-1]&2147483648>>t-1,1)),e},h:(e,t,n)=>32===e?t:(n?0|t:t<<32-e)+1099511627776*e,i:e=>r.round(e/1099511627776)||32,o(e,t,n,r){for(void 0===r&&(r=[]);t>=32;t-=32)r.push(n),n=0;if(0===t)return r.concat(e);for(let s=0;s<e.length;s++)r.push(n|e[s]>>>t),n=e[s]<<32-t;const s=e.length?e[e.length-1]:0,i=_.i(s);return r.push(_.h(t+i&31,t+i>32?n:r.pop(),1)),r}},I={p:{m(e){const t=_.l(e)/8,n=new i(t);let r;for(let s=0;t>s;s++)3&s||(r=e[s/4]),n[s]=r>>>24,r<<=8;return n},k(e){const t=[];let n,r=0;for(n=0;n<e.length;n++)r=r<<8|e[n],3&~n||(t.push(r),r=0);return 3&n&&t.push(_.h(8*(3&n),r)),t}}},P=class{constructor(e){const t=this;t.blockSize=512,t.v=[1732584193,4023233417,2562383102,271733878,3285377520],t.S=[1518500249,1859775393,2400959708,3395469782],e?(t.C=e.C.slice(0),t.A=e.A.slice(0),t._=e._):t.reset()}reset(){const e=this;return e.C=e.v.slice(0),e.A=[],e._=0,e}update(e){const t=this;"string"==typeof e&&(e=I.I.k(e));const n=t.A=_.concat(t.A,e),r=t._,i=t._=r+_.l(e);if(i>9007199254740991)throw new s("Cannot hash more than 2^53 - 1 bits");const o=new c(n);let f=0;for(let e=t.blockSize+r-(t.blockSize+r&t.blockSize-1);i>=e;e+=t.blockSize)t.P(o.subarray(16*f,16*(f+1))),f+=1;return n.splice(0,16*f),t}D(){const e=this;let t=e.A;const n=e.C;t=_.concat(t,[_.h(1,1)]);for(let e=t.length+2;15&e;e++)t.push(0);for(t.push(r.floor(e._/4294967296)),t.push(0|e._);t.length;)e.P(t.splice(0,16));return e.reset(),n}V(e,t,n,r){return e>19?e>39?e>59?e>79?void 0:t^n^r:t&n|t&r|n&r:t^n^r:t&n|~t&r}R(e,t){return t<<e|t>>>32-e}P(t){const n=this,s=n.C,i=e(80);for(let e=0;16>e;e++)i[e]=t[e];let o=s[0],c=s[1],f=s[2],a=s[3],l=s[4];for(let e=0;79>=e;e++){16>e||(i[e]=n.R(1,i[e-3]^i[e-8]^i[e-14]^i[e-16]));const t=n.R(5,o)+n.V(e,c,f,a)+l+i[e]+n.S[r.floor(e/20)]|0;l=a,a=f,f=n.R(30,c),c=o,o=t}s[0]=s[0]+o|0,s[1]=s[1]+c|0,s[2]=s[2]+f|0,s[3]=s[3]+a|0,s[4]=s[4]+l|0}},D={getRandomValues(e){const t=new c(e.buffer),n=e=>{let t=987654321;const n=4294967295;return()=>(t=36969*(65535&t)+(t>>16)&n,(((t<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n)/4294967296+.5)*(r.random()>.5?1:-1))};for(let s,i=0;i<e.length;i+=4){const e=n(4294967296*(s||r.random()));s=987654071*e(),t[i/4]=4294967296*e()|0}return e}},V={importKey:e=>new V.B(I.p.k(e)),M(e,t,n,r){if(n=n||1e4,0>r||0>n)throw new s("invalid params to pbkdf2");const i=1+(r>>5)<<2;let o,c,f,a,u;const w=new ArrayBuffer(i),h=new l(w);let d=0;const p=_;for(t=I.p.k(t),u=1;(i||1)>d;u++){for(o=c=e.encrypt(p.concat(t,[u])),f=1;n>f;f++)for(c=e.encrypt(c),a=0;a<c.length;a++)o[a]^=c[a];for(f=0;(i||1)>d&&f<o.length;f++)h.setInt32(d,o[f]),d+=4}return w.slice(0,r/8)},B:class{constructor(e){const t=this,n=t.U=P,r=[[],[]];t.K=[new n,new n];const s=t.K[0].blockSize/32;e.length>s&&(e=(new n).update(e).D());for(let t=0;s>t;t++)r[0][t]=909522486^e[t],r[1][t]=1549556828^e[t];t.K[0].update(r[0]),t.K[1].update(r[1]),t.N=new n(t.K[0])}reset(){const e=this;e.N=new e.U(e.K[0]),e.O=!1}update(e){this.O=!0,this.N.update(e)}digest(){const e=this,t=e.N.D(),n=new e.U(e.K[1]).update(t).D();return e.reset(),n}encrypt(e){if(this.O)throw new s("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}}},R=typeof h!=v&&typeof h.getRandomValues==S,B="Invalid password",E="Invalid signature",M="zipjs-abort-check-password";function U(e){return R?h.getRandomValues(e):D.getRandomValues(e)}const K=16,N={name:"PBKDF2"},O=t.assign({hash:{name:"HMAC"}},N),T=t.assign({iterations:1e3,hash:{name:"SHA-1"}},N),W=["deriveBits"],j=[8,12,16],H=[16,24,32],L=10,F=[0,0,0,0],q=typeof h!=v,G=q&&h.subtle,J=q&&typeof G!=v,Q=I.p,X=class{constructor(e){const t=this;t.T=[[[],[],[],[],[]],[[],[],[],[],[]]],t.T[0][0][0]||t.W();const n=t.T[0][4],r=t.T[1],i=e.length;let o,c,f,a=1;if(4!==i&&6!==i&&8!==i)throw new s("invalid aes key size");for(t.S=[c=e.slice(0),f=[]],o=i;4*i+28>o;o++){let e=c[o-1];(o%i==0||8===i&&o%i==4)&&(e=n[e>>>24]<<24^n[e>>16&255]<<16^n[e>>8&255]<<8^n[255&e],o%i==0&&(e=e<<8^e>>>24^a<<24,a=a<<1^283*(a>>7))),c[o]=c[o-i]^e}for(let e=0;o;e++,o--){const t=c[3&e?o:o-4];f[e]=4>=o||4>e?t:r[0][n[t>>>24]]^r[1][n[t>>16&255]]^r[2][n[t>>8&255]]^r[3][n[255&t]]}}encrypt(e){return this.j(e,0)}decrypt(e){return this.j(e,1)}W(){const e=this.T[0],t=this.T[1],n=e[4],r=t[4],s=[],i=[];let o,c,f,a;for(let e=0;256>e;e++)i[(s[e]=e<<1^283*(e>>7))^e]=e;for(let l=o=0;!n[l];l^=c||1,o=i[o]||1){let i=o^o<<1^o<<2^o<<3^o<<4;i=i>>8^255&i^99,n[l]=i,r[i]=l,a=s[f=s[c=s[l]]];let u=16843009*a^65537*f^257*c^16843008*l,w=257*s[i]^16843008*i;for(let n=0;4>n;n++)e[n][l]=w=w<<24^w>>>8,t[n][i]=u=u<<24^u>>>8}for(let n=0;5>n;n++)e[n]=e[n].slice(0),t[n]=t[n].slice(0)}j(e,t){if(4!==e.length)throw new s("invalid aes block size");const n=this.S[t],r=n.length/4-2,i=[0,0,0,0],o=this.T[t],c=o[0],f=o[1],a=o[2],l=o[3],u=o[4];let w,h,d,p=e[0]^n[0],y=e[t?3:1]^n[1],m=e[2]^n[2],b=e[t?1:3]^n[3],g=4;for(let e=0;r>e;e++)w=c[p>>>24]^f[y>>16&255]^a[m>>8&255]^l[255&b]^n[g],h=c[y>>>24]^f[m>>16&255]^a[b>>8&255]^l[255&p]^n[g+1],d=c[m>>>24]^f[b>>16&255]^a[p>>8&255]^l[255&y]^n[g+2],b=c[b>>>24]^f[p>>16&255]^a[y>>8&255]^l[255&m]^n[g+3],g+=4,p=w,y=h,m=d;for(let e=0;4>e;e++)i[t?3&-e:e]=u[p>>>24]<<24^u[y>>16&255]<<16^u[m>>8&255]<<8^u[255&b]^n[g++],w=p,p=y,y=m,m=b,b=w;return i}},Y=class{constructor(e,t){this.H=e,this.L=t,this.F=t}reset(){this.F=this.L}update(e){return this.q(this.H,e,this.F)}G(e){if(255&~(e>>24))e+=1<<24;else{let t=e>>16&255,n=e>>8&255,r=255&e;255===t?(t=0,255===n?(n=0,255===r?r=0:++r):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=r}return e}J(e){0===(e[0]=this.G(e[0]))&&(e[1]=this.G(e[1]))}q(e,t,n){let r;if(!(r=t.length))return[];const s=_.l(t);for(let s=0;r>s;s+=4){this.J(n);const r=e.encrypt(n);t[s]^=r[0],t[s+1]^=r[1],t[s+2]^=r[2],t[s+3]^=r[3]}return _.u(t,s)}},Z=V.B;let $=q&&J&&typeof G.importKey==S,ee=q&&J&&typeof G.deriveBits==S;class te extends p{constructor({password:e,rawPassword:n,signed:r,encryptionStrength:o,checkPasswordOnly:c}){super({start(){t.assign(this,{ready:new u((e=>this.X=e)),password:ie(e,n),signed:r,Y:o-1,pending:new i})},async transform(e,t){const n=this,{password:r,Y:o,X:f,ready:a}=n;r?(await(async(e,t,n,r)=>{const i=await se(e,t,n,ce(r,0,j[t])),o=ce(r,j[t]);if(i[0]!=o[0]||i[1]!=o[1])throw new s(B)})(n,o,r,ce(e,0,j[o]+2)),e=ce(e,j[o]+2),c?t.error(new s(M)):f()):await a;const l=new i(e.length-L-(e.length-L)%K);t.enqueue(re(n,e,l,0,L,!0))},async flush(e){const{signed:t,Z:n,$:r,pending:o,ready:c}=this;if(r&&n){await c;const f=ce(o,0,o.length-L),a=ce(o,o.length-L);let l=new i;if(f.length){const e=ae(Q,f);r.update(e);const t=n.update(e);l=fe(Q,t)}if(t){const e=ce(fe(Q,r.digest()),0,L);for(let t=0;L>t;t++)if(e[t]!=a[t])throw new s(E)}e.enqueue(l)}}})}}class ne extends p{constructor({password:e,rawPassword:n,encryptionStrength:r}){let s;super({start(){t.assign(this,{ready:new u((e=>this.X=e)),password:ie(e,n),Y:r-1,pending:new i})},async transform(e,t){const n=this,{password:r,Y:s,X:o,ready:c}=n;let f=new i;r?(f=await(async(e,t,n)=>{const r=U(new i(j[t]));return oe(r,await se(e,t,n,r))})(n,s,r),o()):await c;const a=new i(f.length+e.length-e.length%K);a.set(f,0),t.enqueue(re(n,e,a,f.length,0))},async flush(e){const{Z:t,$:n,pending:r,ready:o}=this;if(n&&t){await o;let c=new i;if(r.length){const e=t.update(ae(Q,r));n.update(e),c=fe(Q,e)}s.signature=fe(Q,n.digest()).slice(0,L),e.enqueue(oe(c,s.signature))}}}),s=this}}function re(e,t,n,r,s,o){const{Z:c,$:f,pending:a}=e,l=t.length-s;let u;for(a.length&&(t=oe(a,t),n=((e,t)=>{if(t&&t>e.length){const n=e;(e=new i(t)).set(n,0)}return e})(n,l-l%K)),u=0;l-K>=u;u+=K){const e=ae(Q,ce(t,u,u+K));o&&f.update(e);const s=c.update(e);o||f.update(s),n.set(fe(Q,s),u+r)}return e.pending=ce(t,u),n}async function se(n,r,s,o){n.password=null;const c=await(async(e,t,n,r,s)=>{if(!$)return V.importKey(t);try{return await G.importKey("raw",t,n,!1,s)}catch(e){return $=!1,V.importKey(t)}})(0,s,O,0,W),f=await(async(e,t,n)=>{if(!ee)return V.M(t,e.salt,T.iterations,n);try{return await G.deriveBits(e,t,n)}catch(r){return ee=!1,V.M(t,e.salt,T.iterations,n)}})(t.assign({salt:o},T),c,8*(2*H[r]+2)),a=new i(f),l=ae(Q,ce(a,0,H[r])),u=ae(Q,ce(a,H[r],2*H[r])),w=ce(a,2*H[r]);return t.assign(n,{keys:{key:l,ee:u,passwordVerification:w},Z:new Y(new X(l),e.from(F)),$:new Z(u)}),w}function ie(e,t){return t===k?(e=>{if(typeof w==v){const t=new i((e=unescape(encodeURIComponent(e))).length);for(let n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return t}return(new w).encode(e)})(e):t}function oe(e,t){let n=e;return e.length+t.length&&(n=new i(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function ce(e,t,n){return e.subarray(t,n)}function fe(e,t){return e.m(t)}function ae(e,t){return e.k(t)}class le extends p{constructor({password:e,passwordVerification:n,checkPasswordOnly:r}){super({start(){t.assign(this,{password:e,passwordVerification:n}),de(this,e)},transform(e,t){const n=this;if(n.password){const t=we(n,e.subarray(0,12));if(n.password=null,t[11]!=n.passwordVerification)throw new s(B);e=e.subarray(12)}r?t.error(new s(M)):t.enqueue(we(n,e))}})}}class ue extends p{constructor({password:e,passwordVerification:n}){super({start(){t.assign(this,{password:e,passwordVerification:n}),de(this,e)},transform(e,t){const n=this;let r,s;if(n.password){n.password=null;const t=U(new i(12));t[11]=n.passwordVerification,r=new i(e.length+t.length),r.set(he(n,t),0),s=12}else r=new i(e.length),s=0;r.set(he(n,e),s),t.enqueue(r)}})}}function we(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=ye(e)^t[r],pe(e,n[r]);return n}function he(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=ye(e)^t[r],pe(e,t[r]);return n}function de(e,n){const r=[305419896,591751049,878082192];t.assign(e,{keys:r,te:new x(r[0]),ne:new x(r[2])});for(let t=0;t<n.length;t++)pe(e,n.charCodeAt(t))}function pe(e,t){let[n,s,i]=e.keys;e.te.append([t]),n=~e.te.get(),s=be(r.imul(be(s+me(n)),134775813)+1),e.ne.append([s>>>24]),i=~e.ne.get(),e.keys=[n,s,i]}function ye(e){const t=2|e.keys[2];return me(r.imul(t,1^t)>>>8)}function me(e){return 255&e}function be(e){return 4294967295&e}const ge="deflate-raw";class ke extends p{constructor(e,{chunkSize:t,CompressionStream:n,CompressionStreamNative:r}){super({});const{compressed:s,encrypted:i,useCompressionStream:o,zipCrypto:c,signed:f,level:a}=e,u=this;let w,h,d=Se(super.readable);i&&!c||!f||(w=new A,d=xe(d,w)),s&&(d=Ce(d,o,{level:a,chunkSize:t},r,n)),i&&(c?d=xe(d,new ue(e)):(h=new ne(e),d=xe(d,h))),ze(u,d,(()=>{let e;i&&!c&&(e=h.signature),i&&!c||!f||(e=new l(w.value.buffer).getUint32(0)),u.signature=e}))}}class ve extends p{constructor(e,{chunkSize:t,DecompressionStream:n,DecompressionStreamNative:r}){super({});const{zipCrypto:i,encrypted:o,signed:c,signature:f,compressed:a,useCompressionStream:u}=e;let w,h,d=Se(super.readable);o&&(i?d=xe(d,new le(e)):(h=new te(e),d=xe(d,h))),a&&(d=Ce(d,u,{chunkSize:t},r,n)),o&&!i||!c||(w=new A,d=xe(d,w)),ze(this,d,(()=>{if((!o||i)&&c){const e=new l(w.value.buffer);if(f!=e.getUint32(0,!1))throw new s(E)}}))}}function Se(e){return xe(e,new p({transform(e,t){e&&e.length&&t.enqueue(e)}}))}function ze(e,n,r){n=xe(n,new p({flush:r})),t.defineProperty(e,"readable",{get:()=>n})}function Ce(e,t,n,r,s){try{e=xe(e,new(t&&r?r:s)(ge,n))}catch(r){if(!t)return e;try{e=xe(e,new s(ge,n))}catch(t){return e}}return e}function xe(e,t){return e.pipeThrough(t)}const Ae="data",_e="close";class Ie extends p{constructor(e,n){super({});const r=this,{codecType:s}=e;let i;s.startsWith("deflate")?i=ke:s.startsWith("inflate")&&(i=ve);let o=0,c=0;const f=new i(e,n),a=super.readable,l=new p({transform(e,t){e&&e.length&&(c+=e.length,t.enqueue(e))},flush(){t.assign(r,{inputSize:c})}}),u=new p({transform(e,t){e&&e.length&&(o+=e.length,t.enqueue(e))},flush(){const{signature:e}=f;t.assign(r,{signature:e,outputSize:o,inputSize:c})}});t.defineProperty(r,"readable",{get:()=>a.pipeThrough(l).pipeThrough(f).pipeThrough(u)})}}class Pe extends p{constructor(e){let t;super({transform:function n(r,s){if(t){const e=new i(t.length+r.length);e.set(t),e.set(r,t.length),r=e,t=null}r.length>e?(s.enqueue(r.slice(0,e)),n(r.slice(e),s)):t=r},flush(e){t&&t.length&&e.enqueue(t)}})}}const De=new a,Ve=new a;let Re,Be=0,Ee=!0;async function Me(e){try{const{options:t,scripts:r,config:s}=e;if(r&&r.length)try{Ee?importScripts.apply(k,r):await Ue(r)}catch(e){Ee=!1,await Ue(r)}self.initCodec&&self.initCodec(),s.CompressionStreamNative=self.CompressionStream,s.DecompressionStreamNative=self.DecompressionStream,self.Deflate&&(s.CompressionStream=new z(self.Deflate)),self.Inflate&&(s.DecompressionStream=new z(self.Inflate));const i={highWaterMark:1},o=e.readable||new y({async pull(e){const t=new u((e=>De.set(Be,e)));Ke({type:"pull",messageId:Be}),Be=(Be+1)%n.MAX_SAFE_INTEGER;const{value:r,done:s}=await t;e.enqueue(r),s&&e.close()}},i),c=e.writable||new m({async write(e){let t;const r=new u((e=>t=e));Ve.set(Be,t),Ke({type:Ae,value:e,messageId:Be}),Be=(Be+1)%n.MAX_SAFE_INTEGER,await r}},i),f=new Ie(t,s);Re=new AbortController;const{signal:a}=Re;await o.pipeThrough(f).pipeThrough(new Pe(s.chunkSize)).pipeTo(c,{signal:a,preventClose:!0,preventAbort:!0}),await c.getWriter().close();const{signature:l,inputSize:w,outputSize:h}=f;Ke({type:_e,result:{signature:l,inputSize:w,outputSize:h}})}catch(e){Ne(e)}}async function Ue(e){for(const t of e)await import(t)}function Ke(e){let{value:t}=e;if(t)if(t.length)try{t=new i(t),e.value=t.buffer,d(e,[e.value])}catch(t){d(e)}else d(e);else d(e)}function Ne(e=new s("Unknown error")){const{message:t,stack:n,code:r,name:i}=e;d({error:{message:t,stack:n,code:r,name:i}})}addEventListener("message",(({data:e})=>{const{type:t,messageId:n,value:r,done:s}=e;try{if("start"==t&&Me(e),t==Ae){const e=De.get(n);De.delete(n),e({value:new i(r),done:s})}if("ack"==t){const e=Ve.get(n);Ve.delete(n),e()}t==_e&&Re.abort()}catch(e){Ne(e)}}));const Oe=-2;function Te(t){return We(t.map((([t,n])=>new e(t).fill(n,0,t))))}function We(t){return t.reduce(((t,n)=>t.concat(e.isArray(n)?We(n):n)),[])}const je=[0,1,2,3].concat(...Te([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function He(){const e=this;function t(e,t){let n=0;do{n|=1&e,e>>>=1,n<<=1}while(--t>0);return n>>>1}e.re=n=>{const s=e.se,i=e.oe.ie,o=e.oe.ce;let c,f,a,l=-1;for(n.fe=0,n.ae=573,c=0;o>c;c++)0!==s[2*c]?(n.le[++n.fe]=l=c,n.ue[c]=0):s[2*c+1]=0;for(;2>n.fe;)a=n.le[++n.fe]=2>l?++l:0,s[2*a]=1,n.ue[a]=0,n.we--,i&&(n.he-=i[2*a+1]);for(e.de=l,c=r.floor(n.fe/2);c>=1;c--)n.pe(s,c);a=o;do{c=n.le[1],n.le[1]=n.le[n.fe--],n.pe(s,1),f=n.le[1],n.le[--n.ae]=c,n.le[--n.ae]=f,s[2*a]=s[2*c]+s[2*f],n.ue[a]=r.max(n.ue[c],n.ue[f])+1,s[2*c+1]=s[2*f+1]=a,n.le[1]=a++,n.pe(s,1)}while(n.fe>=2);n.le[--n.ae]=n.le[1],(t=>{const n=e.se,r=e.oe.ie,s=e.oe.ye,i=e.oe.me,o=e.oe.be;let c,f,a,l,u,w,h=0;for(l=0;15>=l;l++)t.ge[l]=0;for(n[2*t.le[t.ae]+1]=0,c=t.ae+1;573>c;c++)f=t.le[c],l=n[2*n[2*f+1]+1]+1,l>o&&(l=o,h++),n[2*f+1]=l,f>e.de||(t.ge[l]++,u=0,i>f||(u=s[f-i]),w=n[2*f],t.we+=w*(l+u),r&&(t.he+=w*(r[2*f+1]+u)));if(0!==h){do{for(l=o-1;0===t.ge[l];)l--;t.ge[l]--,t.ge[l+1]+=2,t.ge[o]--,h-=2}while(h>0);for(l=o;0!==l;l--)for(f=t.ge[l];0!==f;)a=t.le[--c],a>e.de||(n[2*a+1]!=l&&(t.we+=(l-n[2*a+1])*n[2*a],n[2*a+1]=l),f--)}})(n),((e,n,r)=>{const s=[];let i,o,c,f=0;for(i=1;15>=i;i++)s[i]=f=f+r[i-1]<<1;for(o=0;n>=o;o++)c=e[2*o+1],0!==c&&(e[2*o]=t(s[c]++,c))})(s,e.de,n.ge)}}function Le(e,t,n,r,s){const i=this;i.ie=e,i.ye=t,i.me=n,i.ce=r,i.be=s}He.ke=[0,1,2,3,4,5,6,7].concat(...Te([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]])),He.ve=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],He.Se=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],He.ze=e=>256>e?je[e]:je[256+(e>>>7)],He.Ce=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],He.xe=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],He.Ae=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],He._e=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];const Fe=Te([[144,8],[112,9],[24,7],[8,8]]);Le.Ie=We([12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227].map(((e,t)=>[e,Fe[t]])));const qe=Te([[30,5]]);function Ge(e,t,n,r,s){const i=this;i.Pe=e,i.De=t,i.Ve=n,i.Re=r,i.Be=s}Le.Ee=We([0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23].map(((e,t)=>[e,qe[t]]))),Le.Me=new Le(Le.Ie,He.Ce,257,286,15),Le.Ue=new Le(Le.Ee,He.xe,0,30,15),Le.Ke=new Le(null,He.Ae,0,19,7);const Je=[new Ge(0,0,0,0,0),new Ge(4,4,8,4,1),new Ge(4,5,16,8,1),new Ge(4,6,32,32,1),new Ge(4,4,16,16,2),new Ge(8,16,32,32,2),new Ge(8,16,128,128,2),new Ge(8,32,128,256,2),new Ge(32,128,258,1024,2),new Ge(32,258,258,4096,2)],Qe=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],Xe=113,Ye=666,Ze=262;function $e(e,t,n,r){const s=e[2*t],i=e[2*n];return i>s||s==i&&r[t]<=r[n]}function et(){const e=this;let t,n,s,c,f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z,C,x,A,_,I,P,D,V,R,B,E,M,U;const K=new He,N=new He,O=new He;let T,W,j,H,L,F;function q(){let t;for(t=0;286>t;t++)E[2*t]=0;for(t=0;30>t;t++)M[2*t]=0;for(t=0;19>t;t++)U[2*t]=0;E[512]=1,e.we=e.he=0,W=j=0}function G(e,t){let n,r=-1,s=e[1],i=0,o=7,c=4;0===s&&(o=138,c=3),e[2*(t+1)+1]=65535;for(let f=0;t>=f;f++)n=s,s=e[2*(f+1)+1],++i<o&&n==s||(c>i?U[2*n]+=i:0!==n?(n!=r&&U[2*n]++,U[32]++):i>10?U[36]++:U[34]++,i=0,r=n,0===s?(o=138,c=3):n==s?(o=6,c=3):(o=7,c=4))}function J(t){e.Ne[e.pending++]=t}function Q(e){J(255&e),J(e>>>8&255)}function X(e,t){let n;const r=t;F>16-r?(n=e,L|=n<<F&65535,Q(L),L=n>>>16-F,F+=r-16):(L|=e<<F&65535,F+=r)}function Y(e,t){const n=2*e;X(65535&t[n],65535&t[n+1])}function Z(e,t){let n,r,s=-1,i=e[1],o=0,c=7,f=4;for(0===i&&(c=138,f=3),n=0;t>=n;n++)if(r=i,i=e[2*(n+1)+1],++o>=c||r!=i){if(f>o)do{Y(r,U)}while(0!=--o);else 0!==r?(r!=s&&(Y(r,U),o--),Y(16,U),X(o-3,2)):o>10?(Y(18,U),X(o-11,7)):(Y(17,U),X(o-3,3));o=0,s=r,0===i?(c=138,f=3):r==i?(c=6,f=3):(c=7,f=4)}}function $(){16==F?(Q(L),L=0,F=0):8>F||(J(255&L),L>>>=8,F-=8)}function ee(t,n){let s,i,o;if(e.Oe[W]=t,e.Te[W]=255&n,W++,0===t?E[2*n]++:(j++,t--,E[2*(He.ke[n]+256+1)]++,M[2*He.ze(t)]++),!(8191&W)&&D>2){for(s=8*W,i=C-k,o=0;30>o;o++)s+=M[2*o]*(5+He.xe[o]);if(s>>>=3,j<r.floor(W/2)&&s<r.floor(i/2))return!0}return W==T-1}function te(t,n){let r,s,i,o,c=0;if(0!==W)do{r=e.Oe[c],s=e.Te[c],c++,0===r?Y(s,t):(i=He.ke[s],Y(i+256+1,t),o=He.Ce[i],0!==o&&(s-=He.ve[i],X(s,o)),r--,i=He.ze(r),Y(i,n),o=He.xe[i],0!==o&&(r-=He.Se[i],X(r,o)))}while(W>c);Y(256,t),H=t[513]}function ne(){F>8?Q(L):F>0&&J(255&L),L=0,F=0}function re(t,n,r){X(0+(r?1:0),3),((t,n)=>{ne(),H=8,Q(n),Q(~n),e.Ne.set(u.subarray(t,t+n),e.pending),e.pending+=n})(t,n)}function se(n){((t,n,r)=>{let s,i,o=0;D>0?(K.re(e),N.re(e),o=(()=>{let t;for(G(E,K.de),G(M,N.de),O.re(e),t=18;t>=3&&0===U[2*He._e[t]+1];t--);return e.we+=14+3*(t+1),t})(),s=e.we+3+7>>>3,i=e.he+3+7>>>3,i>s||(s=i)):s=i=n+5,n+4>s||-1==t?i==s?(X(2+(r?1:0),3),te(Le.Ie,Le.Ee)):(X(4+(r?1:0),3),((e,t,n)=>{let r;for(X(e-257,5),X(t-1,5),X(n-4,4),r=0;n>r;r++)X(U[2*He._e[r]+1],3);Z(E,e-1),Z(M,t-1)})(K.de+1,N.de+1,o+1),te(E,M)):re(t,n,r),q(),r&&ne()})(0>k?-1:k,C-k,n),k=C,t.We()}function ie(){let e,n,r,s;do{if(s=w-A-C,0===s&&0===C&&0===A)s=f;else if(-1==s)s--;else if(C>=f+f-Ze){u.set(u.subarray(f,f+f),0),x-=f,C-=f,k-=f,e=y,r=e;do{n=65535&d[--r],d[r]=f>n?0:n-f}while(0!=--e);e=f,r=e;do{n=65535&h[--r],h[r]=f>n?0:n-f}while(0!=--e);s+=f}if(0===t.je)return;e=t.He(u,C+A,s),A+=e,3>A||(p=255&u[C],p=(p<<g^255&u[C+1])&b)}while(Ze>A&&0!==t.je)}function oe(e){let t,n,r=I,s=C,i=_;const o=C>f-Ze?C-(f-Ze):0;let c=B;const a=l,w=C+258;let d=u[s+i-1],p=u[s+i];R>_||(r>>=2),c>A&&(c=A);do{if(t=e,u[t+i]==p&&u[t+i-1]==d&&u[t]==u[s]&&u[++t]==u[s+1]){s+=2,t++;do{}while(u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&w>s);if(n=258-(w-s),s=w-258,n>i){if(x=e,i=n,n>=c)break;d=u[s+i-1],p=u[s+i]}}}while((e=65535&h[e&a])>o&&0!=--r);return i>A?A:i}e.ue=[],e.ge=[],e.le=[],E=[],M=[],U=[],e.pe=(t,n)=>{const r=e.le,s=r[n];let i=n<<1;for(;i<=e.fe&&(i<e.fe&&$e(t,r[i+1],r[i],e.ue)&&i++,!$e(t,s,r[i],e.ue));)r[n]=r[i],n=i,i<<=1;r[n]=s},e.Le=(t,S,x,W,j,G)=>(W||(W=8),j||(j=8),G||(G=0),t.Fe=null,-1==S&&(S=6),1>j||j>9||8!=W||9>x||x>15||0>S||S>9||0>G||G>2?Oe:(t.qe=e,a=x,f=1<<a,l=f-1,m=j+7,y=1<<m,b=y-1,g=r.floor((m+3-1)/3),u=new i(2*f),h=[],d=[],T=1<<j+6,e.Ne=new i(4*T),s=4*T,e.Oe=new o(T),e.Te=new i(T),D=S,V=G,(t=>(t.Ge=t.Je=0,t.Fe=null,e.pending=0,e.Qe=0,n=Xe,c=0,K.se=E,K.oe=Le.Me,N.se=M,N.oe=Le.Ue,O.se=U,O.oe=Le.Ke,L=0,F=0,H=8,q(),(()=>{w=2*f,d[y-1]=0;for(let e=0;y-1>e;e++)d[e]=0;P=Je[D].De,R=Je[D].Pe,B=Je[D].Ve,I=Je[D].Re,C=0,k=0,A=0,v=_=2,z=0,p=0})(),0))(t))),e.Xe=()=>42!=n&&n!=Xe&&n!=Ye?Oe:(e.Te=null,e.Oe=null,e.Ne=null,d=null,h=null,u=null,e.qe=null,n==Xe?-3:0),e.Ye=(e,t,n)=>{let r=0;return-1==t&&(t=6),0>t||t>9||0>n||n>2?Oe:(Je[D].Be!=Je[t].Be&&0!==e.Ge&&(r=e.Ze(1)),D!=t&&(D=t,P=Je[D].De,R=Je[D].Pe,B=Je[D].Ve,I=Je[D].Re),V=n,r)},e.$e=(e,t,r)=>{let s,i=r,o=0;if(!t||42!=n)return Oe;if(3>i)return 0;for(i>f-Ze&&(i=f-Ze,o=r-i),u.set(t.subarray(o,o+i),0),C=i,k=i,p=255&u[0],p=(p<<g^255&u[1])&b,s=0;i-3>=s;s++)p=(p<<g^255&u[s+2])&b,h[s&l]=d[p],d[p]=s;return 0},e.Ze=(r,i)=>{let o,w,m,I,R;if(i>4||0>i)return Oe;if(!r.et||!r.tt&&0!==r.je||n==Ye&&4!=i)return r.Fe=Qe[4],Oe;if(0===r.nt)return r.Fe=Qe[7],-5;var B;if(t=r,I=c,c=i,42==n&&(w=8+(a-8<<4)<<8,m=(D-1&255)>>1,m>3&&(m=3),w|=m<<6,0!==C&&(w|=32),w+=31-w%31,n=Xe,J((B=w)>>8&255),J(255&B)),0!==e.pending){if(t.We(),0===t.nt)return c=-1,0}else if(0===t.je&&I>=i&&4!=i)return t.Fe=Qe[7],-5;if(n==Ye&&0!==t.je)return r.Fe=Qe[7],-5;if(0!==t.je||0!==A||0!=i&&n!=Ye){switch(R=-1,Je[D].Be){case 0:R=(e=>{let n,r=65535;for(r>s-5&&(r=s-5);;){if(1>=A){if(ie(),0===A&&0==e)return 0;if(0===A)break}if(C+=A,A=0,n=k+r,(0===C||C>=n)&&(A=C-n,C=n,se(!1),0===t.nt))return 0;if(C-k>=f-Ze&&(se(!1),0===t.nt))return 0}return se(4==e),0===t.nt?4==e?2:0:4==e?3:1})(i);break;case 1:R=(e=>{let n,r=0;for(;;){if(Ze>A){if(ie(),Ze>A&&0==e)return 0;if(0===A)break}if(3>A||(p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C),0===r||(C-r&65535)>f-Ze||2!=V&&(v=oe(r)),3>v)n=ee(0,255&u[C]),A--,C++;else if(n=ee(C-x,v-3),A-=v,v>P||3>A)C+=v,v=0,p=255&u[C],p=(p<<g^255&u[C+1])&b;else{v--;do{C++,p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C}while(0!=--v);C++}if(n&&(se(!1),0===t.nt))return 0}return se(4==e),0===t.nt?4==e?2:0:4==e?3:1})(i);break;case 2:R=(e=>{let n,r,s=0;for(;;){if(Ze>A){if(ie(),Ze>A&&0==e)return 0;if(0===A)break}if(3>A||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C),_=v,S=x,v=2,0!==s&&P>_&&f-Ze>=(C-s&65535)&&(2!=V&&(v=oe(s)),5>=v&&(1==V||3==v&&C-x>4096)&&(v=2)),3>_||v>_)if(0!==z){if(n=ee(0,255&u[C-1]),n&&se(!1),C++,A--,0===t.nt)return 0}else z=1,C++,A--;else{r=C+A-3,n=ee(C-1-S,_-3),A-=_-1,_-=2;do{++C>r||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C)}while(0!=--_);if(z=0,v=2,C++,n&&(se(!1),0===t.nt))return 0}}return 0!==z&&(n=ee(0,255&u[C-1]),z=0),se(4==e),0===t.nt?4==e?2:0:4==e?3:1})(i)}if(2!=R&&3!=R||(n=Ye),0==R||2==R)return 0===t.nt&&(c=-1),0;if(1==R){if(1==i)X(2,3),Y(256,Le.Ie),$(),9>1+H+10-F&&(X(2,3),Y(256,Le.Ie),$()),H=7;else if(re(0,0,!1),3==i)for(o=0;y>o;o++)d[o]=0;if(t.We(),0===t.nt)return c=-1,0}}return 4!=i?0:1}}function tt(){const e=this;e.rt=0,e.st=0,e.je=0,e.Ge=0,e.nt=0,e.Je=0}function nt(e){const t=new tt,n=(o=e&&e.chunkSize?e.chunkSize:65536)+5*(r.floor(o/16383)+1);var o;const c=new i(n);let f=e?e.level:-1;void 0===f&&(f=-1),t.Le(f),t.et=c,this.append=(e,r)=>{let o,f,a=0,l=0,u=0;const w=[];if(e.length){t.rt=0,t.tt=e,t.je=e.length;do{if(t.st=0,t.nt=n,o=t.Ze(0),0!=o)throw new s("deflating: "+t.Fe);t.st&&(t.st==n?w.push(new i(c)):w.push(c.subarray(0,t.st))),u+=t.st,r&&t.rt>0&&t.rt!=a&&(r(t.rt),a=t.rt)}while(t.je>0||0===t.nt);return w.length>1?(f=new i(u),w.forEach((e=>{f.set(e,l),l+=e.length}))):f=w[0]?new i(w[0]):new i,f}},this.flush=()=>{let e,r,o=0,f=0;const a=[];do{if(t.st=0,t.nt=n,e=t.Ze(4),1!=e&&0!=e)throw new s("deflating: "+t.Fe);n-t.nt>0&&a.push(c.slice(0,t.st)),f+=t.st}while(t.je>0||0===t.nt);return t.Xe(),r=new i(f),a.forEach((e=>{r.set(e,o),o+=e.length})),r}}tt.prototype={Le(e,t){const n=this;return n.qe=new et,t||(t=15),n.qe.Le(n,e,t)},Ze(e){const t=this;return t.qe?t.qe.Ze(t,e):Oe},Xe(){const e=this;if(!e.qe)return Oe;const t=e.qe.Xe();return e.qe=null,t},Ye(e,t){const n=this;return n.qe?n.qe.Ye(n,e,t):Oe},$e(e,t){const n=this;return n.qe?n.qe.$e(n,e,t):Oe},He(e,t,n){const r=this;let s=r.je;return s>n&&(s=n),0===s?0:(r.je-=s,e.set(r.tt.subarray(r.rt,r.rt+s),t),r.rt+=s,r.Ge+=s,s)},We(){const e=this;let t=e.qe.pending;t>e.nt&&(t=e.nt),0!==t&&(e.et.set(e.qe.Ne.subarray(e.qe.Qe,e.qe.Qe+t),e.st),e.st+=t,e.qe.Qe+=t,e.Je+=t,e.nt-=t,e.qe.pending-=t,0===e.qe.pending&&(e.qe.Qe=0))}};const rt=-2,st=-3,it=-5,ot=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],ct=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],ft=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],at=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],lt=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],ut=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],wt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];function ht(){let e,t,n,r,s,i;function o(e,t,o,c,f,a,l,u,w,h,d){let p,y,m,b,g,k,v,S,z,C,x,A,_,I,P;C=0,g=o;do{n[e[t+C]]++,C++,g--}while(0!==g);if(n[0]==o)return l[0]=-1,u[0]=0,0;for(S=u[0],k=1;15>=k&&0===n[k];k++);for(v=k,k>S&&(S=k),g=15;0!==g&&0===n[g];g--);for(m=g,S>g&&(S=g),u[0]=S,I=1<<k;g>k;k++,I<<=1)if(0>(I-=n[k]))return st;if(0>(I-=n[g]))return st;for(n[g]+=I,i[1]=k=0,C=1,_=2;0!=--g;)i[_]=k+=n[C],_++,C++;g=0,C=0;do{0!==(k=e[t+C])&&(d[i[k]++]=g),C++}while(++g<o);for(o=i[m],i[0]=g=0,C=0,b=-1,A=-S,s[0]=0,x=0,P=0;m>=v;v++)for(p=n[v];0!=p--;){for(;v>A+S;){if(b++,A+=S,P=m-A,P=P>S?S:P,(y=1<<(k=v-A))>p+1&&(y-=p+1,_=v,P>k))for(;++k<P&&(y<<=1)>n[++_];)y-=n[_];if(P=1<<k,h[0]+P>1440)return st;s[b]=x=h[0],h[0]+=P,0!==b?(i[b]=g,r[0]=k,r[1]=S,k=g>>>A-S,r[2]=x-s[b-1]-k,w.set(r,3*(s[b-1]+k))):l[0]=x}for(r[1]=v-A,o>C?d[C]<c?(r[0]=256>d[C]?0:96,r[2]=d[C++]):(r[0]=a[d[C]-c]+16+64,r[2]=f[d[C++]-c]):r[0]=192,y=1<<v-A,k=g>>>A;P>k;k+=y)w.set(r,3*(x+k));for(k=1<<v-1;g&k;k>>>=1)g^=k;for(g^=k,z=(1<<A)-1;(g&z)!=i[b];)b--,A-=S,z=(1<<A)-1}return 0!==I&&1!=m?it:0}function c(o){let c;for(e||(e=[],t=[],n=new f(16),r=[],s=new f(15),i=new f(16)),t.length<o&&(t=[]),c=0;o>c;c++)t[c]=0;for(c=0;16>c;c++)n[c]=0;for(c=0;3>c;c++)r[c]=0;s.set(n.subarray(0,15),0),i.set(n.subarray(0,16),0)}this.it=(n,r,s,i,f)=>{let a;return c(19),e[0]=0,a=o(n,0,19,19,null,null,s,r,i,e,t),a==st?f.Fe="oversubscribed dynamic bit lengths tree":a!=it&&0!==r[0]||(f.Fe="incomplete dynamic bit lengths tree",a=st),a},this.ot=(n,r,s,i,f,a,l,u,w)=>{let h;return c(288),e[0]=0,h=o(s,0,n,257,at,lt,a,i,u,e,t),0!=h||0===i[0]?(h==st?w.Fe="oversubscribed literal/length tree":-4!=h&&(w.Fe="incomplete literal/length tree",h=st),h):(c(288),h=o(s,n,r,0,ut,wt,l,f,u,e,t),0!=h||0===f[0]&&n>257?(h==st?w.Fe="oversubscribed distance tree":h==it?(w.Fe="incomplete distance tree",h=st):-4!=h&&(w.Fe="empty distance tree with lengths",h=st),h):0)}}function dt(){const e=this;let t,n,r,s,i=0,o=0,c=0,f=0,a=0,l=0,u=0,w=0,h=0,d=0;function p(e,t,n,r,s,i,o,c){let f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z;d=c.rt,p=c.je,w=o.ct,h=o.ft,y=o.write,m=y<o.read?o.read-y-1:o.end-y,b=ot[e],g=ot[t];do{for(;20>h;)p--,w|=(255&c.lt(d++))<<h,h+=8;if(f=w&b,a=n,l=r,z=3*(l+f),0!==(u=a[z]))for(;;){if(w>>=a[z+1],h-=a[z+1],16&u){for(u&=15,k=a[z+2]+(w&ot[u]),w>>=u,h-=u;15>h;)p--,w|=(255&c.lt(d++))<<h,h+=8;for(f=w&g,a=s,l=i,z=3*(l+f),u=a[z];;){if(w>>=a[z+1],h-=a[z+1],16&u){for(u&=15;u>h;)p--,w|=(255&c.lt(d++))<<h,h+=8;if(v=a[z+2]+(w&ot[u]),w>>=u,h-=u,m-=k,v>y){S=y-v;do{S+=o.end}while(0>S);if(u=o.end-S,k>u){if(k-=u,y-S>0&&u>y-S)do{o.ut[y++]=o.ut[S++]}while(0!=--u);else o.ut.set(o.ut.subarray(S,S+u),y),y+=u,S+=u,u=0;S=0}}else S=y-v,y-S>0&&2>y-S?(o.ut[y++]=o.ut[S++],o.ut[y++]=o.ut[S++],k-=2):(o.ut.set(o.ut.subarray(S,S+2),y),y+=2,S+=2,k-=2);if(y-S>0&&k>y-S)do{o.ut[y++]=o.ut[S++]}while(0!=--k);else o.ut.set(o.ut.subarray(S,S+k),y),y+=k,S+=k,k=0;break}if(64&u)return c.Fe="invalid distance code",k=c.je-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ct=w,o.ft=h,c.je=p,c.Ge+=d-c.rt,c.rt=d,o.write=y,st;f+=a[z+2],f+=w&ot[u],z=3*(l+f),u=a[z]}break}if(64&u)return 32&u?(k=c.je-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ct=w,o.ft=h,c.je=p,c.Ge+=d-c.rt,c.rt=d,o.write=y,1):(c.Fe="invalid literal/length code",k=c.je-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ct=w,o.ft=h,c.je=p,c.Ge+=d-c.rt,c.rt=d,o.write=y,st);if(f+=a[z+2],f+=w&ot[u],z=3*(l+f),0===(u=a[z])){w>>=a[z+1],h-=a[z+1],o.ut[y++]=a[z+2],m--;break}}else w>>=a[z+1],h-=a[z+1],o.ut[y++]=a[z+2],m--}while(m>=258&&p>=10);return k=c.je-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ct=w,o.ft=h,c.je=p,c.Ge+=d-c.rt,c.rt=d,o.write=y,0}e.init=(e,i,o,c,f,a)=>{t=0,u=e,w=i,r=o,h=c,s=f,d=a,n=null},e.wt=(e,y,m)=>{let b,g,k,v,S,z,C,x=0,A=0,_=0;for(_=y.rt,v=y.je,x=e.ct,A=e.ft,S=e.write,z=S<e.read?e.read-S-1:e.end-S;;)switch(t){case 0:if(z>=258&&v>=10&&(e.ct=x,e.ft=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,m=p(u,w,r,h,s,d,e,y),_=y.rt,v=y.je,x=e.ct,A=e.ft,S=e.write,z=S<e.read?e.read-S-1:e.end-S,0!=m)){t=1==m?7:9;break}c=u,n=r,o=h,t=1;case 1:for(b=c;b>A;){if(0===v)return e.ct=x,e.ft=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.ht(y,m);m=0,v--,x|=(255&y.lt(_++))<<A,A+=8}if(g=3*(o+(x&ot[b])),x>>>=n[g+1],A-=n[g+1],k=n[g],0===k){f=n[g+2],t=6;break}if(16&k){a=15&k,i=n[g+2],t=2;break}if(!(64&k)){c=k,o=g/3+n[g+2];break}if(32&k){t=7;break}return t=9,y.Fe="invalid literal/length code",m=st,e.ct=x,e.ft=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.ht(y,m);case 2:for(b=a;b>A;){if(0===v)return e.ct=x,e.ft=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.ht(y,m);m=0,v--,x|=(255&y.lt(_++))<<A,A+=8}i+=x&ot[b],x>>=b,A-=b,c=w,n=s,o=d,t=3;case 3:for(b=c;b>A;){if(0===v)return e.ct=x,e.ft=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.ht(y,m);m=0,v--,x|=(255&y.lt(_++))<<A,A+=8}if(g=3*(o+(x&ot[b])),x>>=n[g+1],A-=n[g+1],k=n[g],16&k){a=15&k,l=n[g+2],t=4;break}if(!(64&k)){c=k,o=g/3+n[g+2];break}return t=9,y.Fe="invalid distance code",m=st,e.ct=x,e.ft=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.ht(y,m);case 4:for(b=a;b>A;){if(0===v)return e.ct=x,e.ft=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.ht(y,m);m=0,v--,x|=(255&y.lt(_++))<<A,A+=8}l+=x&ot[b],x>>=b,A-=b,t=5;case 5:for(C=S-l;0>C;)C+=e.end;for(;0!==i;){if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.ht(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ct=x,e.ft=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.ht(y,m);e.ut[S++]=e.ut[C++],z--,C==e.end&&(C=0),i--}t=0;break;case 6:if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.ht(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ct=x,e.ft=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.ht(y,m);m=0,e.ut[S++]=f,z--,t=0;break;case 7:if(A>7&&(A-=8,v++,_--),e.write=S,m=e.ht(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,e.read!=e.write)return e.ct=x,e.ft=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.ht(y,m);t=8;case 8:return m=1,e.ct=x,e.ft=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.ht(y,m);case 9:return m=st,e.ct=x,e.ft=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.ht(y,m);default:return m=rt,e.ct=x,e.ft=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.ht(y,m)}},e.dt=()=>{}}ht.yt=(e,t,n,r)=>(e[0]=9,t[0]=5,n[0]=ct,r[0]=ft,0);const pt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function yt(e,t){const n=this;let r,s=0,o=0,c=0,a=0;const l=[0],u=[0],w=new dt;let h=0,d=new f(4320);const p=new ht;n.ft=0,n.ct=0,n.ut=new i(t),n.end=t,n.read=0,n.write=0,n.reset=(e,t)=>{t&&(t[0]=0),6==s&&w.dt(e),s=0,n.ft=0,n.ct=0,n.read=n.write=0},n.reset(e,null),n.ht=(e,t)=>{let r,s,i;return s=e.st,i=n.read,r=(i>n.write?n.end:n.write)-i,r>e.nt&&(r=e.nt),0!==r&&t==it&&(t=0),e.nt-=r,e.Je+=r,e.et.set(n.ut.subarray(i,i+r),s),s+=r,i+=r,i==n.end&&(i=0,n.write==n.end&&(n.write=0),r=n.write-i,r>e.nt&&(r=e.nt),0!==r&&t==it&&(t=0),e.nt-=r,e.Je+=r,e.et.set(n.ut.subarray(i,i+r),s),s+=r,i+=r),e.st=s,n.read=i,t},n.wt=(e,t)=>{let i,f,y,m,b,g,k,v;for(m=e.rt,b=e.je,f=n.ct,y=n.ft,g=n.write,k=g<n.read?n.read-g-1:n.end-g;;){let S,z,C,x,A,_,I,P;switch(s){case 0:for(;3>y;){if(0===b)return n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);t=0,b--,f|=(255&e.lt(m++))<<y,y+=8}switch(i=7&f,h=1&i,i>>>1){case 0:f>>>=3,y-=3,i=7&y,f>>>=i,y-=i,s=1;break;case 1:S=[],z=[],C=[[]],x=[[]],ht.yt(S,z,C,x),w.init(S[0],z[0],C[0],0,x[0],0),f>>>=3,y-=3,s=6;break;case 2:f>>>=3,y-=3,s=3;break;case 3:return f>>>=3,y-=3,s=9,e.Fe="invalid block type",t=st,n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t)}break;case 1:for(;32>y;){if(0===b)return n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);t=0,b--,f|=(255&e.lt(m++))<<y,y+=8}if((~f>>>16&65535)!=(65535&f))return s=9,e.Fe="invalid stored block lengths",t=st,n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);o=65535&f,f=y=0,s=0!==o?2:0!==h?7:0;break;case 2:if(0===b)return n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);if(0===k&&(g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k&&(n.write=g,t=n.ht(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k)))return n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);if(t=0,i=o,i>b&&(i=b),i>k&&(i=k),n.ut.set(e.He(m,i),g),m+=i,b-=i,g+=i,k-=i,0!=(o-=i))break;s=0!==h?7:0;break;case 3:for(;14>y;){if(0===b)return n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);t=0,b--,f|=(255&e.lt(m++))<<y,y+=8}if(c=i=16383&f,(31&i)>29||(i>>5&31)>29)return s=9,e.Fe="too many length or distance symbols",t=st,n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);if(i=258+(31&i)+(i>>5&31),!r||r.length<i)r=[];else for(v=0;i>v;v++)r[v]=0;f>>>=14,y-=14,a=0,s=4;case 4:for(;4+(c>>>10)>a;){for(;3>y;){if(0===b)return n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);t=0,b--,f|=(255&e.lt(m++))<<y,y+=8}r[pt[a++]]=7&f,f>>>=3,y-=3}for(;19>a;)r[pt[a++]]=0;if(l[0]=7,i=p.it(r,l,u,d,e),0!=i)return(t=i)==st&&(r=null,s=9),n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);a=0,s=5;case 5:for(;i=c,258+(31&i)+(i>>5&31)>a;){let o,w;for(i=l[0];i>y;){if(0===b)return n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);t=0,b--,f|=(255&e.lt(m++))<<y,y+=8}if(i=d[3*(u[0]+(f&ot[i]))+1],w=d[3*(u[0]+(f&ot[i]))+2],16>w)f>>>=i,y-=i,r[a++]=w;else{for(v=18==w?7:w-14,o=18==w?11:3;i+v>y;){if(0===b)return n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);t=0,b--,f|=(255&e.lt(m++))<<y,y+=8}if(f>>>=i,y-=i,o+=f&ot[v],f>>>=v,y-=v,v=a,i=c,v+o>258+(31&i)+(i>>5&31)||16==w&&1>v)return r=null,s=9,e.Fe="invalid bit length repeat",t=st,n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);w=16==w?r[v-1]:0;do{r[v++]=w}while(0!=--o);a=v}}if(u[0]=-1,A=[],_=[],I=[],P=[],A[0]=9,_[0]=6,i=c,i=p.ot(257+(31&i),1+(i>>5&31),r,A,_,I,P,d,e),0!=i)return i==st&&(r=null,s=9),t=i,n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);w.init(A[0],_[0],d,I[0],d,P[0]),s=6;case 6:if(n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,1!=(t=w.wt(n,e,t)))return n.ht(e,t);if(t=0,w.dt(e),m=e.rt,b=e.je,f=n.ct,y=n.ft,g=n.write,k=g<n.read?n.read-g-1:n.end-g,0===h){s=0;break}s=7;case 7:if(n.write=g,t=n.ht(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,n.read!=n.write)return n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);s=8;case 8:return t=1,n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);case 9:return t=st,n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t);default:return t=rt,n.ct=f,n.ft=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.ht(e,t)}}},n.dt=e=>{n.reset(e,null),n.ut=null,d=null},n.bt=(e,t,r)=>{n.ut.set(e.subarray(t,t+r),0),n.read=n.write=r},n.gt=()=>1==s?1:0}const mt=13,bt=[0,0,255,255];function gt(){const e=this;function t(e){return e&&e.kt?(e.Ge=e.Je=0,e.Fe=null,e.kt.mode=7,e.kt.vt.reset(e,null),0):rt}e.mode=0,e.method=0,e.St=[0],e.zt=0,e.marker=0,e.Ct=0,e.xt=t=>(e.vt&&e.vt.dt(t),e.vt=null,0),e.At=(n,r)=>(n.Fe=null,e.vt=null,8>r||r>15?(e.xt(n),rt):(e.Ct=r,n.kt.vt=new yt(n,1<<r),t(n),0)),e._t=(e,t)=>{let n,r;if(!e||!e.kt||!e.tt)return rt;const s=e.kt;for(t=4==t?it:0,n=it;;)switch(s.mode){case 0:if(0===e.je)return n;if(n=t,e.je--,e.Ge++,8!=(15&(s.method=e.lt(e.rt++)))){s.mode=mt,e.Fe="unknown compression method",s.marker=5;break}if(8+(s.method>>4)>s.Ct){s.mode=mt,e.Fe="invalid win size",s.marker=5;break}s.mode=1;case 1:if(0===e.je)return n;if(n=t,e.je--,e.Ge++,r=255&e.lt(e.rt++),((s.method<<8)+r)%31!=0){s.mode=mt,e.Fe="incorrect header check",s.marker=5;break}if(!(32&r)){s.mode=7;break}s.mode=2;case 2:if(0===e.je)return n;n=t,e.je--,e.Ge++,s.zt=(255&e.lt(e.rt++))<<24&4278190080,s.mode=3;case 3:if(0===e.je)return n;n=t,e.je--,e.Ge++,s.zt+=(255&e.lt(e.rt++))<<16&16711680,s.mode=4;case 4:if(0===e.je)return n;n=t,e.je--,e.Ge++,s.zt+=(255&e.lt(e.rt++))<<8&65280,s.mode=5;case 5:return 0===e.je?n:(n=t,e.je--,e.Ge++,s.zt+=255&e.lt(e.rt++),s.mode=6,2);case 6:return s.mode=mt,e.Fe="need dictionary",s.marker=0,rt;case 7:if(n=s.vt.wt(e,n),n==st){s.mode=mt,s.marker=0;break}if(0==n&&(n=t),1!=n)return n;n=t,s.vt.reset(e,s.St),s.mode=12;case 12:return e.je=0,1;case mt:return st;default:return rt}},e.It=(e,t,n)=>{let r=0,s=n;if(!e||!e.kt||6!=e.kt.mode)return rt;const i=e.kt;return s<1<<i.Ct||(s=(1<<i.Ct)-1,r=n-s),i.vt.bt(t,r,s),i.mode=7,0},e.Pt=e=>{let n,r,s,i,o;if(!e||!e.kt)return rt;const c=e.kt;if(c.mode!=mt&&(c.mode=mt,c.marker=0),0===(n=e.je))return it;for(r=e.rt,s=c.marker;0!==n&&4>s;)e.lt(r)==bt[s]?s++:s=0!==e.lt(r)?0:4-s,r++,n--;return e.Ge+=r-e.rt,e.rt=r,e.je=n,c.marker=s,4!=s?st:(i=e.Ge,o=e.Je,t(e),e.Ge=i,e.Je=o,c.mode=7,0)},e.Dt=e=>e&&e.kt&&e.kt.vt?e.kt.vt.gt():rt}function kt(){}function vt(e){const t=new kt,n=e&&e.chunkSize?r.floor(2*e.chunkSize):131072,o=new i(n);let c=!1;t.At(),t.et=o,this.append=(e,r)=>{const f=[];let a,l,u=0,w=0,h=0;if(0!==e.length){t.rt=0,t.tt=e,t.je=e.length;do{if(t.st=0,t.nt=n,0!==t.je||c||(t.rt=0,c=!0),a=t._t(0),c&&a===it){if(0!==t.je)throw new s("inflating: bad input")}else if(0!==a&&1!==a)throw new s("inflating: "+t.Fe);if((c||1===a)&&t.je===e.length)throw new s("inflating: bad input");t.st&&(t.st===n?f.push(new i(o)):f.push(o.subarray(0,t.st))),h+=t.st,r&&t.rt>0&&t.rt!=u&&(r(t.rt),u=t.rt)}while(t.je>0||0===t.nt);return f.length>1?(l=new i(h),f.forEach((e=>{l.set(e,w),w+=e.length}))):l=f[0]?new i(f[0]):new i,l}},this.flush=()=>{t.xt()}}kt.prototype={At(e){const t=this;return t.kt=new gt,e||(e=15),t.kt.At(t,e)},_t(e){const t=this;return t.kt?t.kt._t(t,e):rt},xt(){const e=this;if(!e.kt)return rt;const t=e.kt.xt(e);return e.kt=null,t},Pt(){const e=this;return e.kt?e.kt.Pt(e):rt},It(e,t){const n=this;return n.kt?n.kt.It(n,e,t):rt},lt(e){return this.tt[e]},He(e,t){return this.tt.subarray(e,e+t)}},self.initCodec=()=>{self.Deflate=nt,self.Inflate=vt};
`, i = () => n.useDataURI ? "data:text/javascript," + encodeURIComponent(e) : URL.createObjectURL(new Blob([e], { type: "text/javascript" }));
  t({ workerScripts: { inflate: [i], deflate: [i] } });
}
const Ls = "Writer iterator completed too soon", Ns = "Content-Type", js = 64 * 1024, Ai = "writable";
class Vt {
  constructor() {
    this.size = 0;
  }
  init() {
    this.initialized = !0;
  }
}
class Ti extends Vt {
  get readable() {
    const n = this, { chunkSize: e = js } = n, i = new ReadableStream({
      start() {
        this.chunkOffset = 0;
      },
      async pull(r) {
        const { offset: s = 0, size: a, diskNumberStart: d } = i, { chunkOffset: o } = this;
        r.enqueue(await te(n, s + o, Math.min(e, a - o), d)), o + e > a ? r.close() : this.chunkOffset += e;
      }
    });
    return i;
  }
}
class Ps extends Ti {
  constructor(n) {
    super(), Object.assign(this, {
      blob: n,
      size: n.size
    });
  }
  async readUint8Array(n, e) {
    const i = this, r = n + e;
    let a = await (n || r < i.size ? i.blob.slice(n, r) : i.blob).arrayBuffer();
    return a.byteLength > e && (a = a.slice(n, r)), new Uint8Array(a);
  }
}
class ha extends Vt {
  constructor(n) {
    super();
    const e = this, i = new TransformStream(), r = [];
    n && r.push([Ns, n]), Object.defineProperty(e, Ai, {
      get() {
        return i.writable;
      }
    }), e.blob = new Response(i.readable, { headers: r }).blob();
  }
  getData() {
    return this.blob;
  }
}
class Us extends Ti {
  constructor(n) {
    super(), this.readers = n;
  }
  async init() {
    const n = this, { readers: e } = n;
    n.lastDiskNumber = 0, n.lastDiskOffset = 0, await Promise.all(e.map(async (i, r) => {
      await i.init(), r != e.length - 1 && (n.lastDiskOffset += i.size), n.size += i.size;
    })), super.init();
  }
  async readUint8Array(n, e, i = 0) {
    const r = this, { readers: s } = this;
    let a, d = i;
    d == -1 && (d = s.length - 1);
    let o = n;
    for (; o >= s[d].size; )
      o -= s[d].size, d++;
    const x = s[d], u = x.size;
    if (o + e <= u)
      a = await te(x, o, e);
    else {
      const p = u - o;
      a = new Uint8Array(e), a.set(await te(x, o, p)), a.set(await r.readUint8Array(n + p, e - p, i), p);
    }
    return r.lastDiskNumber = Math.max(d, r.lastDiskNumber), a;
  }
}
class $n extends Vt {
  constructor(n, e = 4294967295) {
    super();
    const i = this;
    Object.assign(i, {
      diskNumber: 0,
      diskOffset: 0,
      size: 0,
      maxSize: e,
      availableSize: e
    });
    let r, s, a;
    const d = new WritableStream({
      async write(u) {
        const { availableSize: p } = i;
        if (a)
          u.length >= p ? (await o(u.slice(0, p)), await x(), i.diskOffset += r.size, i.diskNumber++, a = null, await this.write(u.slice(p))) : await o(u);
        else {
          const { value: m, done: v } = await n.next();
          if (v && !m)
            throw new Error(Ls);
          r = m, r.size = 0, r.maxSize && (i.maxSize = r.maxSize), i.availableSize = i.maxSize, await bt(r), s = m.writable, a = s.getWriter(), await this.write(u);
        }
      },
      async close() {
        await a.ready, await x();
      }
    });
    Object.defineProperty(i, Ai, {
      get() {
        return d;
      }
    });
    async function o(u) {
      const p = u.length;
      p && (await a.ready, await a.write(u), r.size += p, i.size += p, i.availableSize -= p);
    }
    async function x() {
      s.size = r.size, await a.close();
    }
  }
}
async function bt(t, n) {
  if (t.init && !t.initialized)
    await t.init(n);
  else
    return Promise.resolve();
}
function Ms(t) {
  return Array.isArray(t) && (t = new Us(t)), t instanceof ReadableStream && (t = {
    readable: t
  }), t;
}
function Zs(t) {
  t.writable === ce && typeof t.next == tt && (t = new $n(t)), t instanceof WritableStream && (t = {
    writable: t
  });
  const { writable: n } = t;
  return n.size === ce && (n.size = 0), t instanceof $n || Object.assign(t, {
    diskNumber: 0,
    diskOffset: 0,
    availableSize: 1 / 0,
    maxSize: 1 / 0
  }), t;
}
function te(t, n, e, i) {
  return t.readUint8Array(n, e, i);
}
const Ri = "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split(""), Bs = Ri.length == 256;
function Hs(t) {
  if (Bs) {
    let n = "";
    for (let e = 0; e < t.length; e++)
      n += Ri[t[e]];
    return n;
  } else
    return new TextDecoder().decode(t);
}
function xt(t, n) {
  return n && n.trim().toLowerCase() == "cp437" ? Hs(t) : new TextDecoder(n).decode(t);
}
const Ci = "filename", Oi = "rawFilename", Di = "comment", Ii = "rawComment", Fi = "uncompressedSize", Li = "compressedSize", Ni = "offset", Ht = "diskNumberStart", Gt = "lastModDate", qt = "rawLastModDate", ji = "lastAccessDate", Gs = "rawLastAccessDate", Pi = "creationDate", qs = "rawCreationDate", Ws = "internalFileAttribute", $s = "externalFileAttribute", Ks = "msDosCompatible", Ys = "zip64", Vs = "encrypted", Xs = "version", Js = "versionMadeBy", Qs = "zipCrypto", zs = [
  Ci,
  Oi,
  Li,
  Fi,
  Gt,
  qt,
  Di,
  Ii,
  ji,
  Pi,
  Ni,
  Ht,
  Ht,
  Ws,
  $s,
  Ks,
  Ys,
  Vs,
  Xs,
  Js,
  Qs,
  "directory",
  "bitFlag",
  "signature",
  "filenameUTF8",
  "commentUTF8",
  "compressionMethod",
  "extraField",
  "rawExtraField",
  "extraFieldZip64",
  "extraFieldUnicodePath",
  "extraFieldUnicodeComment",
  "extraFieldAES",
  "extraFieldNTFS",
  "extraFieldExtendedTimestamp"
];
class Kn {
  constructor(n) {
    zs.forEach((e) => this[e] = n[e]);
  }
}
const Ut = "File format is not recognized", ea = "End of central directory not found", ta = "End of Zip64 central directory locator not found", na = "Central directory header not found", ia = "Local file header not found", ra = "Zip64 extra field not found", sa = "File contains encrypted entry", aa = "Encryption method not supported", Yn = "Compression method not supported", Vn = "Split zip file", Xn = "utf-8", Jn = "cp437", oa = [
  [Fi, je],
  [Li, je],
  [Ni, je],
  [Ht, Oe]
], ca = {
  [Oe]: {
    getValue: V,
    bytes: 4
  },
  [je]: {
    getValue: _t,
    bytes: 8
  }
};
class wa {
  constructor(n, e = {}) {
    Object.assign(this, {
      reader: Ms(n),
      options: e,
      config: $r()
    });
  }
  async *getEntriesGenerator(n = {}) {
    const e = this;
    let { reader: i } = e;
    const { config: r } = e;
    if (await bt(i), (i.size === ce || !i.readUint8Array) && (i = new Ps(await new Response(i.readable).blob()), await bt(i)), i.size < Be)
      throw new Error(Ut);
    i.chunkSize = Kr(r);
    const s = await pa(i, Ir, i.size, Be, Oe * 16);
    if (!s) {
      const T = await te(i, 0, 4), k = Q(T);
      throw V(k) == Dr ? new Error(Vn) : new Error(ea);
    }
    const a = Q(s);
    let d = V(a, 12), o = V(a, 16);
    const x = s.offset, u = J(a, 20), p = x + Be + u;
    let m = J(a, 4);
    const v = i.lastDiskNumber || 0;
    let D = J(a, 6), f = J(a, 8), c = 0, l = 0;
    if (o == je || d == je || f == Oe || D == Oe) {
      const T = await te(i, s.offset - It, It), k = Q(T);
      if (V(k, 0) == Fr) {
        o = _t(k, 8);
        let N = await te(i, o, Ft, -1), I = Q(N);
        const M = s.offset - It - Ft;
        if (V(I, 0) != Rn && o != M) {
          const j = o;
          o = M, c = o - j, N = await te(i, o, Ft, -1), I = Q(N);
        }
        if (V(I, 0) != Rn)
          throw new Error(ta);
        m == Oe && (m = V(I, 16)), D == Oe && (D = V(I, 20)), f == Oe && (f = _t(I, 32)), d == je && (d = _t(I, 40)), o -= d;
      }
    }
    if (o >= i.size && (c = i.size - o - d - Be, o = i.size - d - Be), v != m)
      throw new Error(Vn);
    if (o < 0)
      throw new Error(Ut);
    let _ = 0, g = await te(i, o, d, D), A = Q(g);
    if (d) {
      const T = s.offset - d;
      if (V(A, _) != Tn && o != T) {
        const k = o;
        o = T, c += o - k, g = await te(i, o, d, D), A = Q(g);
      }
    }
    const w = s.offset - o - (i.lastDiskOffset || 0);
    if (d != w && w >= 0 && (d = w, g = await te(i, o, d, D), A = Q(g)), o < 0 || o >= i.size)
      throw new Error(Ut);
    const h = ae(e, n, "filenameEncoding"), b = ae(e, n, "commentEncoding");
    for (let T = 0; T < f; T++) {
      const k = new la(i, r, e.options);
      if (V(A, _) != Tn)
        throw new Error(na);
      Ui(k, A, _ + 6);
      const N = !!k.bitFlag.languageEncodingFlag, I = _ + 46, M = I + k.filenameLength, j = M + k.extraFieldLength, L = J(A, _ + 4), B = (L & 0) == 0, H = g.subarray(I, M), ee = J(A, _ + 32), U = j + ee, ne = g.subarray(j, U), Z = N, W = N, ke = B && (qe(A, _ + 38) & In) == In, ie = V(A, _ + 42) + c;
      Object.assign(k, {
        versionMadeBy: L,
        msDosCompatible: B,
        compressedSize: 0,
        uncompressedSize: 0,
        commentLength: ee,
        directory: ke,
        offset: ie,
        diskNumberStart: J(A, _ + 34),
        internalFileAttribute: J(A, _ + 36),
        externalFileAttribute: V(A, _ + 38),
        rawFilename: H,
        filenameUTF8: Z,
        commentUTF8: W,
        rawExtraField: g.subarray(M, j)
      });
      const X = ae(e, n, "decodeText") || xt, it = Z ? Xn : h || Jn, We = W ? Xn : b || Jn;
      let Ue = X(H, it);
      Ue === ce && (Ue = xt(H, it));
      let Me = X(ne, We);
      Me === ce && (Me = xt(ne, We)), Object.assign(k, {
        rawComment: ne,
        filename: Ue,
        comment: Me,
        directory: ke || Ue.endsWith(Gr)
      }), l = Math.max(ie, l), await Mi(k, k, A, _ + 6), k.zipCrypto = k.encrypted && !k.extraFieldAES;
      const $e = new Kn(k);
      $e.getData = (Ee, kt) => k.getData(Ee, $e, kt), _ = U;
      const { onprogress: ge } = n;
      if (ge)
        try {
          await ge(T + 1, f, new Kn(k));
        } catch {
        }
      yield $e;
    }
    const E = ae(e, n, "extractPrependedData"), R = ae(e, n, "extractAppendedData");
    return E && (e.prependedData = l > 0 ? await te(i, 0, l) : new Uint8Array()), e.comment = u ? await te(i, x + Be, u) : new Uint8Array(), R && (e.appendedData = p < i.size ? await te(i, p, i.size - p) : new Uint8Array()), !0;
  }
  async getEntries(n = {}) {
    const e = [];
    for await (const i of this.getEntriesGenerator(n))
      e.push(i);
    return e;
  }
  async close() {
  }
}
class la {
  constructor(n, e, i) {
    Object.assign(this, {
      reader: n,
      config: e,
      options: i
    });
  }
  async getData(n, e, i = {}) {
    const r = this, {
      reader: s,
      offset: a,
      diskNumberStart: d,
      extraFieldAES: o,
      compressionMethod: x,
      config: u,
      bitFlag: p,
      signature: m,
      rawLastModDate: v,
      uncompressedSize: D,
      compressedSize: f
    } = r, c = e.localDirectory = {}, l = await te(s, a, 30, d), _ = Q(l);
    let g = ae(r, i, "password"), A = ae(r, i, "rawPassword");
    const w = ae(r, i, "passThrough");
    if (g = g && g.length && g, A = A && A.length && A, o && o.originalCompressionMethod != Cr)
      throw new Error(Yn);
    if (x != Rr && x != Tr && !w)
      throw new Error(Yn);
    if (V(_, 0) != Or)
      throw new Error(ia);
    Ui(c, _, 4), c.rawExtraField = c.extraFieldLength ? await te(s, a + 30 + c.filenameLength, c.extraFieldLength, d) : new Uint8Array(), await Mi(r, c, _, 4, !0), Object.assign(e, {
      lastAccessDate: c.lastAccessDate,
      creationDate: c.creationDate
    });
    const h = r.encrypted && c.encrypted && !w, b = h && !o;
    if (w || (e.zipCrypto = b), h) {
      if (!b && o.strength === ce)
        throw new Error(aa);
      if (!g && !A)
        throw new Error(sa);
    }
    const E = a + 30 + c.filenameLength + c.extraFieldLength, R = f, T = s.readable;
    Object.assign(T, {
      diskNumberStart: d,
      offset: E,
      size: R
    });
    const k = ae(r, i, "signal"), N = ae(r, i, "checkPasswordOnly");
    N && (n = new WritableStream()), n = Zs(n), await bt(n, w ? f : D);
    const { writable: I } = n, { onstart: M, onprogress: j, onend: L } = i, B = {
      options: {
        codecType: ki,
        password: g,
        rawPassword: A,
        zipCrypto: b,
        encryptionStrength: o && o.strength,
        signed: ae(r, i, "checkSignature") && !w,
        passwordVerification: b && (p.dataDescriptor ? v >>> 8 & 255 : m >>> 24 & 255),
        signature: m,
        compressed: x != 0 && !w,
        encrypted: r.encrypted && !w,
        useWebWorkers: ae(r, i, "useWebWorkers"),
        useCompressionStream: ae(r, i, "useCompressionStream"),
        transferStreams: ae(r, i, "transferStreams"),
        checkPasswordOnly: N
      },
      config: u,
      streamOptions: { signal: k, size: R, onstart: M, onprogress: j, onend: L }
    };
    let H = 0;
    try {
      ({ outputSize: H } = await Ds({ readable: T, writable: I }, B));
    } catch (ee) {
      if (!N || ee.message != $t)
        throw ee;
    } finally {
      const ee = ae(r, i, "preventClose");
      I.size += H, !ee && !I.locked && await I.getWriter().close();
    }
    return N ? ce : n.getData ? n.getData() : I;
  }
}
function Ui(t, n, e) {
  const i = t.rawBitFlag = J(n, e + 2), r = (i & Cn) == Cn, s = V(n, e + 6);
  Object.assign(t, {
    encrypted: r,
    version: J(n, e),
    bitFlag: {
      level: (i & Hr) >> 1,
      dataDescriptor: (i & On) == On,
      languageEncodingFlag: (i & Dn) == Dn
    },
    rawLastModDate: s,
    lastModDate: xa(s),
    filenameLength: J(n, e + 22),
    extraFieldLength: J(n, e + 24)
  });
}
async function Mi(t, n, e, i, r) {
  const { rawExtraField: s } = n, a = n.extraField = /* @__PURE__ */ new Map(), d = Q(new Uint8Array(s));
  let o = 0;
  try {
    for (; o < s.length; ) {
      const l = J(d, o), _ = J(d, o + 2);
      a.set(l, {
        type: l,
        data: s.slice(o + 4, o + 4 + _)
      }), o += 4 + _;
    }
  } catch {
  }
  const x = J(e, i + 4);
  Object.assign(n, {
    signature: V(e, i + 10),
    uncompressedSize: V(e, i + 18),
    compressedSize: V(e, i + 14)
  });
  const u = a.get(Lr);
  u && (fa(u, n), n.extraFieldZip64 = u);
  const p = a.get(Mr);
  p && (await Qn(p, Ci, Oi, n, t), n.extraFieldUnicodePath = p);
  const m = a.get(Zr);
  m && (await Qn(m, Di, Ii, n, t), n.extraFieldUnicodeComment = m);
  const v = a.get(Nr);
  v ? (da(v, n, x), n.extraFieldAES = v) : n.compressionMethod = x;
  const D = a.get(jr);
  D && (ua(D, n), n.extraFieldNTFS = D);
  const f = a.get(Ur);
  f && (ma(f, n, r), n.extraFieldExtendedTimestamp = f);
  const c = a.get(Br);
  c && (n.extraFieldUSDZ = c);
}
function fa(t, n) {
  n.zip64 = !0;
  const e = Q(t.data), i = oa.filter(([r, s]) => n[r] == s);
  for (let r = 0, s = 0; r < i.length; r++) {
    const [a, d] = i[r];
    if (n[a] == d) {
      const o = ca[d];
      n[a] = t[a] = o.getValue(e, s), s += o.bytes;
    } else if (t[a])
      throw new Error(ra);
  }
}
async function Qn(t, n, e, i, r) {
  const s = Q(t.data), a = new ht();
  a.append(r[e]);
  const d = Q(new Uint8Array(4));
  d.setUint32(0, a.get(), !0);
  const o = V(s, 1);
  Object.assign(t, {
    version: qe(s, 0),
    [n]: xt(t.data.subarray(5)),
    valid: !r.bitFlag.languageEncodingFlag && o == V(d, 0)
  }), t.valid && (i[n] = t[n], i[n + "UTF8"] = !0);
}
function da(t, n, e) {
  const i = Q(t.data), r = qe(i, 4);
  Object.assign(t, {
    vendorVersion: qe(i, 0),
    vendorId: qe(i, 2),
    strength: r,
    originalCompressionMethod: e,
    compressionMethod: J(i, 5)
  }), n.compressionMethod = t.compressionMethod;
}
function ua(t, n) {
  const e = Q(t.data);
  let i = 4, r;
  try {
    for (; i < t.data.length && !r; ) {
      const s = J(e, i), a = J(e, i + 2);
      s == Pr && (r = t.data.slice(i + 4, i + 4 + a)), i += 4 + a;
    }
  } catch {
  }
  try {
    if (r && r.length == 24) {
      const s = Q(r), a = s.getBigUint64(0, !0), d = s.getBigUint64(8, !0), o = s.getBigUint64(16, !0);
      Object.assign(t, {
        rawLastModDate: a,
        rawLastAccessDate: d,
        rawCreationDate: o
      });
      const x = Mt(a), u = Mt(d), p = Mt(o), m = { lastModDate: x, lastAccessDate: u, creationDate: p };
      Object.assign(t, m), Object.assign(n, m);
    }
  } catch {
  }
}
function ma(t, n, e) {
  const i = Q(t.data), r = qe(i, 0), s = [], a = [];
  e ? ((r & 1) == 1 && (s.push(Gt), a.push(qt)), (r & 2) == 2 && (s.push(ji), a.push(Gs)), (r & 4) == 4 && (s.push(Pi), a.push(qs))) : t.data.length >= 5 && (s.push(Gt), a.push(qt));
  let d = 1;
  s.forEach((o, x) => {
    if (t.data.length >= d + 4) {
      const u = V(i, d);
      n[o] = t[o] = new Date(u * 1e3);
      const p = a[x];
      t[p] = u;
    }
    d += 4;
  });
}
async function pa(t, n, e, i, r) {
  const s = new Uint8Array(4), a = Q(s);
  _a(a, 0, n);
  const d = i + r;
  return await o(i) || await o(Math.min(d, e));
  async function o(x) {
    const u = e - x, p = await te(t, u, x);
    for (let m = p.length - i; m >= 0; m--)
      if (p[m] == s[0] && p[m + 1] == s[1] && p[m + 2] == s[2] && p[m + 3] == s[3])
        return {
          offset: u + m,
          buffer: p.slice(m, m + i).buffer
        };
  }
}
function ae(t, n, e) {
  return n[e] === ce ? t.options[e] : n[e];
}
function xa(t) {
  const n = (t & 4294901760) >> 16, e = t & 65535;
  try {
    return new Date(1980 + ((n & 65024) >> 9), ((n & 480) >> 5) - 1, n & 31, (e & 63488) >> 11, (e & 2016) >> 5, (e & 31) * 2, 0);
  } catch {
  }
}
function Mt(t) {
  return new Date(Number(t / BigInt(1e4) - BigInt(116444736e5)));
}
function qe(t, n) {
  return t.getUint8(n);
}
function J(t, n) {
  return t.getUint16(n, !0);
}
function V(t, n) {
  return t.getUint32(n, !0);
}
function _t(t, n) {
  return Number(t.getBigUint64(n, !0));
}
function _a(t, n, e) {
  t.setUint32(n, e, !0);
}
function Q(t) {
  return new DataView(t.buffer);
}
let Zi;
try {
  Zi = import.meta.url;
} catch {
}
Wt({ baseURL: Zi });
Fs(Wt);
Wt({ Deflate: sr, Inflate: Ar });
export {
  Ps as BlobReader,
  ha as BlobWriter,
  wa as ZipReader
};
//# sourceMappingURL=zipjs-wrapper-TqLA4H4S.js.map
