import Course from "../model/lessonSchema.js"
import slugify from 'slugify'

export const addNewCourse=async (req,res)=>{

    const {title,description,slug}=req.body;
    try {
        const course=await new Course(
            {
                title,
                description,
                slug:slugify(slug),
                instructor:req.user._id
            }
        ).save();
        
      
        return res.json(course)
        
    } catch (error) {
return res.json(400).json({successs:false,message:error.message})
        
    }


    
}



// get all course  admin 


export const getAdminAllCourse= async(req,res)=>{ 

    try {
        const course = await Course.find({ instructor: req.user._id }).populate(
          "instructor"
        );

        res.json(course);
        
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
        
    }

}

// add lesson in course 

export const addLesson=async(req,res)=>{
    const{slug}=req.params;
    const{title}=req.body;
    console.log("slug",slug)

const updated=await Course.findById({slug:slugify(slug)})
res.json(updated);
}
