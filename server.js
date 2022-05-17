const jsonServer = require("json-server");
const auth = require("json-server-auth");
const cors = require("cors");
const port = process.env.PORT || 3001;
const app = jsonServer.create();
const router = jsonServer.router("db.json");
app.db = router.db;
const rules = auth.rewriter({
  users: 664,
  products: 644,
  providers: 600,
  supplies: 600,
  finances: 600,
  orders: 600,
  tickets: 600
});
app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);
console.log("Server is running on port:", port);