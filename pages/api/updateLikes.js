// pages/api/updateLikes.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { id } = req.body;
    
    // Define the path to the JSON file
    const filePath = path.resolve('data', 'content.json');
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData.toString());

    const test = (item) =>{
        return item.id == id
    }

    // Find the content by ID and increment its likes
    console.log("id", id);
    const contentIndex = data.content.findIndex(test);
    console.log("content index", contentIndex);
    console.log("data", data.content[3]);
    if (contentIndex > -1) {
        data.content[contentIndex].likes += 1; // Increment likes
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2)); // Write the updated data back to the file
    }
    res.status(200);
}
