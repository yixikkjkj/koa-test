# koa-test

学习一下koa框架和用法，使用 typescript 开发，使用一个db来保存数据

实现接口请求和各种功能支持

- [ ] json
- [ ] form
  - [ ] normal form
  - [ ] file upload
- [x] router and nested router
- [ ] database orm and model
- [ ] app config and env variable
- [ ] render template backend
- [ ] typescript compile and develop
- [ ] docker and docker-compose deploy

## 文件引用

使用 tsconfig.json 中的 paths 定义了 ~ 为 src，在编译时增加了 tsc-alias 将 path 别名转换为相对路径

```json
{
  "paths": {
    "~/*": ["./src/*"],
  },
}
```
