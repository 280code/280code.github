const Koa = require('koa2')
const app = new Koa()
const port = 3000;
const Router = require('koa-router')
const router = new Router()
const views = require('koa-views')

app.use(views('views',{
    extension:'ejs'
}))

app.listen(port,()=>{ 
     console.log("hello")
})

router.get('/',async (ctx)=>{
   await ctx.render('index')
}).get('/news',async (ctx)=>{
    ctx.body="这是一个新闻页面"
})

app.use(router.routes(),router.allowedMethods)