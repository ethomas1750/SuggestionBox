const Suggestion = require('../model/suggestion')

async function getAllSuggestions(req, res, next){
    try {
        let foundSuggestions = await Suggestion.find({})
        res.json({message: 'success', foundSuggestions})
        
    } catch (error) {
        res.json({message: 'error', error: error.message})
    }
}

async function createSuggestion(req, res, next){
    try {
        const savedSuggestion = new Suggestion ({
                 title : req.body.title,
                 author : req.body.author,
                 suggestion : req.body.suggestion,
                 likes: req.body.likes,
                 anonymous: req.body.anonymous,
                 timeCreated: req.body.timeCreated
        })
        await savedSuggestion.save()
        res.json({message: "successfully created suggestion", savedSuggestion})
    } catch (error) {
        res.json({message: error, error: error.message})
    }
}

async function getSingleSuggestion(req,res,next){
    try {
        let singleSuggestion = await Suggestion.find({_id:req.params.id})
        res.json({message:"found suggestion",singleSuggestion})
    } catch (error) {
        res.json({message:"failed",error:error.message})
    }
}

async function updateSuggestion(req, res, next){
   try {
    const suggestionUpdated = await Suggestion.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true})
    res.json({message: "Suggestion updated", suggestionUpdated})
   } catch (error) {
        res.json({message: "error", error: error.message})
   } 

}

async function deleteSuggestion(req, res, next){
    try {
        const {id} = req.params
    const suggestionDeleted = await Suggestion.findByIdAndDelete({_id:id})
    res.json({message: "Suggestion deleted", suggestionDeleted})
    }catch (error){
        res.json({message: error, error: error.message})
    }
}

async function getSuggestionsByAuthor(req,res,next){
    try {
        const {author} = req.query
        let suggestion =await Suggestion.find({author})
        res.json({message:"found",suggestion})
    } catch (error) {
        res.json({message:"failed",error:error.message})
    }
}


module.exports = {
    getAllSuggestions,
    getSingleSuggestion,
    createSuggestion,
    updateSuggestion,
    deleteSuggestion,
    getSuggestionsByAuthor
}
