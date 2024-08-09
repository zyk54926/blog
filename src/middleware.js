export function onRequest(context, next) {
  // 拦截一个请求里的数据
  // 可选地修改 `locals` 中的属性
  context.locals.slide = 'true'

  // 返回一个 Response 或者调用 `next()` 的结果
  return next()
}
