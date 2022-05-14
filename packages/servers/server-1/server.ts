import express from "express";
const app = express();
const port = 3798;
export interface Blabla {
  foo: string;
}
app.get("/data", (req: any, res: any) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ foo: "bar" });
});

app.listen(port, () => console.log(`app running on port ${port}`));
