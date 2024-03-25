import path from "path";
import fs from "fs"

export default async function ApproveBlog(req, res) {
    // console.log("REQ: ",req)
    let { name } = req.searchParams
    let filename = path.join(process.cwd(), "src", "app", "blogs", "src", "app", "employee", "blogs", "blog", name)
    let newpath = path.join(process.cwd(), "src", "app", "blogs", name)

fs.rename(filename, newpath, (err) => {
    if (err) {
        console.error('Error moving directory:', err);
        return;
    }
    fs.readFile(path.join(newpath, "page.jsx"), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        let newData = data.replace(`const [feed, setFeed] = useState(0)
    const [action, setAction] = useState("")
    const approve = () => {
        setAction("Approve")
        setFeed(1)
    }
    const reject = () => {
        setAction("Reject")
        setFeed(1)
    }
    const cancel = () => {
        setFeed(0)
    }
    const performAction = () => {
        if (action === "Reject") {
            let filename = document.querySelector("main .title h1")
            filename = filename.innerText
            filename = filename.split(":")[0].replaceAll(" ", "").toLowerCase();
            async function removeBlog() {
                await axios({
                    method: "post",
                    url: "https://vizackenterprises.com/api/rejectBlog",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    params: { name: filename }
                }).then((res) => {
                    console.log("Response: ", res)
                }).catch((error) => {
                    console.log("Error: ", error);
                });
            }
            removeBlog()
        }
    else if (action === "Approve") {
    let filename = document.querySelector("main .title h1")
    filename = filename.innerText
    filename = filename.split(":")[0].replaceAll(" ", "").toLowerCase();
    async function approveBlog() {
        await axios({
            method: "post",
            url: "https://vizackenterprises.com/api/approveBlog",
            headers: {
                "Content-Type": "application/json"
            },
            params: { name: filename }
        }).then(() => {
    console.log()
        }).catch((error) => {
            console.log("Error: ", error);
        });
    }
    approveBlog()
}
    }`, "");
        newData = newData.replace(`<div className="flex flex-col gap-6 px-6 justify-center fixed w-64 right-0 bg-note py-4 z-20 rounded-l-md rounded-t-md">
        <button onClick = { approve } className = "px-4 py-1 rounded-md bg-green-500 hover:bg-green-700 text-xl text-white" > Approve</button>
            <button onClick={reject} className="px-4 py-1 rounded-md bg-red-500 hover:bg-red-700 text-xl text-white">Reject</button>
            </div >
        { feed == 1 && (
            <div className="fixed h-full w-full justify-center items-center z-20 flex top-0 left-0 bg-dark">
                <div className="">
                    <textarea id="feedback" placeholder="Write a Feedback (Optional)" className="outline-none p-2 resize-none h-64 w-96" ></textarea>
                    <div className="flex gap-4 justify-center">
                        <button onClick={performAction} className="px-4 py-1 rounded-md bg-green-500 hover:bg-green-700 text-xl text-white">{action}</button>
                        <button onClick={cancel} className="px-4 py-1 rounded-md bg-red-500 hover:bg-red-700 text-xl text-white">Cancel</button>
                    </div>
                </div>
            </div>
        )
}`, "")
        fs.writeFile(path.join(newpath, "page.jsx"), newData, 'utf8', err => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('File has been modified successfully.');
        });
    })
});
}