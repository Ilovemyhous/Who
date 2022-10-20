//Get's the name of the user
username = localStorage.name
if (username == "" || username == null || username == undefined) {
    let download = new File(
        ["I have a surprise for you ..."],
        "Surprise.txt",
        {type: "text/plain:charset=utf8"}
    );

    saveAs(download)
}

else {
    let download = new File(
        ["I have a surprise for you " +username+"..."],
        username+".txt",
        {type: "text/plain:charset=utf8"}
    );

    saveAs(download)
}