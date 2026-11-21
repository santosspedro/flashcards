"use strict";

// Paths and markers share the same 600 × 480 coordinate space.
const plates = {
  digestorio: {
    title: "Vista anterior · esquema do sistema digestório",
    description: "Trato digestivo visto de frente, com órgãos anexos. O marcador indica a estrutura da questão.",
    shapes: [
      ["#c58070", "M264 35 Q291 20 321 38 Q315 56 293 55 L292 71 L274 69 Z"],
      ["#c58070", "M281 58 Q299 65 301 84 L305 133 L288 137 L284 92 Q278 81 275 71 Z"],
      ["#8d4939", "M134 140 Q154 111 216 114 Q249 118 285 136 Q283 156 260 166 Q238 173 213 165 Q163 194 129 171 Q120 159 134 140 Z"],
      ["#65844a", "M204 166 Q215 157 219 166 L217 186 Q210 196 202 188 Q198 182 204 166 Z"],
      ["#8b537d", "M365 140 Q394 120 411 143 Q427 166 399 196 Q386 207 370 190 Z"],
      ["#d98c79", "M289 124 L305 123 Q307 142 321 144 Q346 123 369 141 Q407 166 376 203 Q352 232 302 211 Q280 200 262 210 L252 198 Q265 188 288 193 Q314 197 316 174 Q317 161 298 154 Q285 146 289 124 Z"],
      ["#e0b65e", "M260 224 Q279 204 305 214 Q347 209 371 193 Q391 185 397 195 Q382 215 353 225 Q309 232 267 240 Z"],
      ["#d28c72", "M267 198 Q242 191 230 207 Q216 221 226 244 Q236 259 261 251 L268 239 Q248 245 240 235 Q231 215 254 210 L267 211 Z"],
      ["#e9b394", "M228 266 C218 275 239 280 265 269 S334 272 339 282 S322 300 284 291 S230 293 226 305 S249 323 280 314 S343 309 348 327 S319 348 287 337 S237 335 229 351 S260 370 291 360 S332 365 321 378", 13],
      ["#a86458", "M206 356 Q190 334 192 302 L196 263 Q199 241 219 244 Q265 254 307 245 Q356 234 387 247 Q405 256 401 282 L398 343 Q393 371 370 383 Q351 392 329 385 Q308 380 315 400 L315 443", 23],
      ["#ac685c", "M186 347 Q170 367 190 380 Q204 389 213 375 L213 351 Z"],
      ["#ac685c", "M191 375 Q186 393 202 402", 7]
    ]
  },
  pancreas: {
    title: "Vista anterior · esquema do pâncreas, duodeno e baço",
    description: "Esquema da região pancreática, com órgãos, ductos e vasos. O marcador indica a estrutura da questão.",
    shapes: [
      ["#ba564c", "M288 99 L292 354", 15],
      ["#cd6059", "M289 140 L330 117 L350 101", 8],
      ["#bc5756", "M329 118 Q349 144 374 129 T418 130 T449 151", 7],
      ["#bd5d57", "M306 133 Q269 123 243 143 L226 183 L225 266", 6],
      ["#bd5d57", "M292 202 Q321 234 323 342", 8],
      ["#5979a6", "M447 178 Q380 160 346 163 L273 173 Q257 197 260 224 L268 347", 10],
      ["#855479", "M452 125 Q499 107 522 144 Q551 188 517 237 Q489 271 458 242 Q444 229 449 215 Q476 203 464 183 Q442 168 452 125 Z"],
      ["#d9a879", "M197 172 Q137 158 121 204 Q99 253 126 303 Q145 335 198 334 Q226 329 226 309 L226 287 L207 286 L207 306 L190 306 Q153 311 143 284 Q130 257 146 217 Q157 195 192 202 Z"],
      ["#e3ae53", "M178 216 Q195 189 228 200 Q263 179 311 189 Q383 199 452 183 Q474 184 464 201 Q423 222 371 225 L265 235 Q242 242 238 274 Q233 302 205 298 Q176 296 174 264 Z"],
      ["#f8e6b8", "M442 200 Q394 213 349 209 Q295 206 248 219 Q195 224 149 254 M382 208 L392 193 M337 208 L345 225 M282 211 L273 195 M230 224 L218 255", 5],
      ["#67874c", "M166 103 Q160 81 180 80 Q204 89 202 111 Q200 122 190 128 L189 147 Q184 158 173 149 L178 130 Q168 121 166 103 Z"],
      ["#67874c", "M190 141 Q202 155 194 180 L188 213 Q181 235 150 256", 7]
    ]
  },
  coracao: {
    title: "Corte frontal · esquema do coração",
    description: "Corte do coração com cavidades, grandes vasos e valvas. O marcador indica a estrutura da questão.",
    shapes: [
      ["#5778a4", "M162 62 L204 62 L208 279 L172 367 L139 352 L160 272 Z"],
      ["#b94f49", "M329 213 L313 140 Q307 76 368 64 Q408 62 427 99 L394 114 Q380 93 363 106 Q343 122 350 144 L363 202 Z"],
      ["#6485b0", "M254 257 Q237 207 242 162 Q249 112 289 116 Q319 119 334 143 L313 173 Q289 142 279 166 L280 217 L287 250 Z"],
      ["#b94f49", "M398 153 L468 144 L473 169 L399 185 Z M398 190 L467 180 L473 204 L402 219 Z"],
      ["#b56a66", "M166 157 Q207 145 238 180 Q258 195 284 221 Q312 197 335 181 Q383 148 416 193 Q458 243 419 340 Q388 412 327 445 Q287 429 257 396 Q206 365 175 322 Q146 290 147 241 Q143 202 166 157 Z"],
      ["#7798c0", "M176 178 Q206 167 230 192 L237 239 Q213 259 179 246 Q160 218 176 178 Z"],
      ["#7798c0", "M185 267 Q215 266 238 248 Q269 268 272 302 Q278 339 311 398 Q221 364 185 294 Z"],
      ["#e4a097", "M327 214 Q369 175 400 202 Q418 224 410 244 Q375 262 335 248 Z"],
      ["#e4a097", "M330 272 Q365 271 401 256 Q410 307 382 349 Q367 374 332 416 Q296 357 296 320 Q301 293 330 272 Z"],
      ["#f4dfc7", "M198 254 Q221 246 235 242 M332 258 Q365 263 397 247", 8],
      ["#f4dfc7", "M244 204 Q258 200 275 206 M321 192 Q338 188 353 196", 7]
    ]
  },
  vasos: {
    title: "Parede vascular · cortes esquemáticos",
    description: "Três cortes de vasos sanguíneos com paredes de espessuras diferentes.",
    shapes: [
      ["#c99c7c", "M245 167 A99 99 0 1 1 47 167 A99 99 0 1 1 245 167 Z"],
      ["#ad5756", "M224 167 A78 78 0 1 1 68 167 A78 78 0 1 1 224 167 Z"],
      ["#e8a393", "M194 167 A48 48 0 1 1 98 167 A48 48 0 1 1 194 167 Z"],
      ["#fcf1de", "M183 167 A37 37 0 1 1 109 167 A37 37 0 1 1 183 167 Z"],
      ["#abb4c6", "M313 91 Q405 65 456 127 Q505 187 438 233 Q360 275 303 214 Q273 175 313 91 Z"],
      ["#708ab0", "M326 117 Q401 87 442 139 Q472 185 423 214 Q368 246 323 202 Q299 174 326 117 Z"],
      ["#f5eada", "M332 127 Q391 96 431 146 Q454 181 418 205 Q375 233 339 195 Q311 173 332 127 Z"],
      ["#c792a4", "M355 350 A54 54 0 1 1 247 350 A54 54 0 1 1 355 350 Z"],
      ["#fcf1de", "M345 350 A44 44 0 1 1 257 350 A44 44 0 1 1 345 350 Z"],
      ["#bc5f57", "M320 350 A19 13 0 1 1 282 350 A19 13 0 1 1 320 350 Z"]
    ]
  },
  linfatico: {
    title: "Sistema linfático · vista anterior esquemática",
    description: "Silhueta humana com vasos, agrupamentos de linfonodos e órgãos linfoides destacados por cor.",
    shapes: [
      ["#ebcfb6", "M336 69 A36 40 0 1 1 264 69 A36 40 0 1 1 336 69 Z M279 109 L277 126 L232 136 L206 170 L169 293 L191 303 L230 218 L247 187 L247 290 L232 430 L262 435 L300 319 L338 435 L367 430 L353 292 L351 187 L370 219 L407 303 L431 293 L395 170 L369 136 L322 126 L321 109 Z"],
      ["#528b65", "M296 286 L300 206 L313 156 Q319 143 344 149 M296 275 L266 298 L254 352 L245 412 M296 275 L336 297 L347 355 L356 414 M236 160 L215 220 L184 288 M367 160 L389 224 L417 288 M273 147 L266 116 M332 147 L336 116", 5],
      ["#629b72", "M243 160 A8 8 0 1 1 227 160 A8 8 0 1 1 243 160 Z M254 173 A8 8 0 1 1 238 173 A8 8 0 1 1 254 173 Z M376 160 A8 8 0 1 1 360 160 A8 8 0 1 1 376 160 Z M365 174 A8 8 0 1 1 349 174 A8 8 0 1 1 365 174 Z M275 297 A8 8 0 1 1 259 297 A8 8 0 1 1 275 297 Z M344 297 A8 8 0 1 1 328 297 A8 8 0 1 1 344 297 Z"],
      ["#c7837f", "M291 147 Q302 140 312 152 Q321 172 313 188 Q306 191 300 172 Q295 191 285 185 Q279 173 291 147 Z"],
      ["#8d557f", "M334 204 Q351 194 354 210 Q355 223 342 239 Q331 244 328 234 Q339 216 334 204 Z"]
    ]
  }
};

function paintPlate(canvas, item) {
  const plate = plates[item.plate];
  const ctx = canvas.getContext("2d");
  ctx.scale(canvas.width / 600, canvas.height / 480);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  for (const [color, path, stroke] of plate.shapes) {
    const shape = new Path2D(path);
    if (!stroke) ctx.fillStyle = color;
    ctx.strokeStyle = stroke ? color : "rgba(70,41,31,.5)";
    ctx.lineWidth = stroke || 1.5;
    if (!stroke) ctx.fill(shape);
    ctx.stroke(shape);
  }
  const [x, y] = item.point;
  const leaderX = x < 300 ? -27 : 27;
  ctx.beginPath();
  ctx.moveTo(x + leaderX, y - 24);
  ctx.lineTo(x, y);
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 7;
  ctx.stroke();
  ctx.strokeStyle = "#202829";
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.fillStyle = "#202829";
  ctx.fill();
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x + leaderX, y - 24, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = "#fff";
  ctx.font = "bold 16px system-ui";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("?", x + leaderX, y - 24);
}
