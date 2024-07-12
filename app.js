const express = require("express");
const Task = require("./models/Task");
const { getTask, updateTask, deleteTask } = require("./controllers/CRUD");
const app = express();
const PORT = 9000;
require("./MongoDb");
const userRouter = require("./routers/user_routes")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/user", userRouter);

app.get("/", (req, res) => {
    res.send("This is response from server");
});

app.get("/add-task", async (req, res) => {
    let data = new Task({ title: "Title Samp", description: "Description Samp" });
    await data.save();
    res.status(201).send("Saved!!");
});

app.get("/get-tasks", (req, res) => {
    getTask(req, res);
});

app.put("/update-task/:id", async (req, res) => {
    // const id = req.params.id;
    // updateTask(req, res, id);
    const { id } = req.params;
    try {
        const TaskList = await Task.updateOne(
            { _id: id },
            { $set: {...req.body} }
        );
        if (!TaskList.matchedCount) {
            return res.status(404).send({ message: `Id not found` });
        }
        return res.status(200).send({ message: "Task Updated" });
    } catch (error) {
        return res.status(500).send({ message: "Server Error", error });
    }
});

app.delete("./delete-task/:id", (req, res) => {
    const { id } = req.params;
    deleteTask(req, res, id);
})

app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});