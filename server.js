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
  providers: 644,
  supplies: 644,
  finances: 644,
  orders: 644,
  tickets: 664,
  users: 664
});
app.use(cors());
app.use(rules);
app.use(auth);
app.use(router);
app.listen(port);
console.log("Server is running on port:", port);