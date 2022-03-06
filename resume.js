/*Day 3 - JS array & objects*/

//Task

//2.Create your own resume data in JSON format

var resume={
    
    "Name":"Bhargav Burgul",
    "Date of Birth":"3 February 2022",
    "City":"Solapur",
    "Qualification":
    {
        "Graduate": "BE Computer",
        "CGPA": "6.91",
        "HSC": "CBSE 12th",
        "Percentage1": "57%",
        "SSC": "CBSE 10th",
        "Percentage12" :"70%",
    },
    "Skills":"C , C++, Python, SQL",
    "Hobbies":"Coding, Painting,Reading, Story Writting, Gardening ",

}

// iterate through the above Object


for(let i in resume)
{
    console.log(i,' ',resume[i])
}