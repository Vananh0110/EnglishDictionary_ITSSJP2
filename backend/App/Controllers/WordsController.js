var express = require('express')
var axios = require('axios')
class WordsControllers {
    // [GET] /
    async index(req, res) {
        // const reqWord = req.query.words;
        // console.log(reqWord)
        try {
            const response = await axios.get('http://localhost:8000/words', {
                    params: {
                        // word: reqWord
                    }
                });
            // console.log(response)
            res.send(response.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
    // [GET] /:slug
    async show(req, res) {
        var slug = req.params.slug;
        console.log(slug)
        try {
            const wordResponse = await axios.get('http://localhost:8000/words', {
                    params: {
                        word: slug
                    }
                });
            const words = wordResponse.data;
            const word = words[0];
            const topicResponse = await axios.get(`http://localhost:8000/topic/${word.topic_id}`);
            const topic = topicResponse.data;
            console.log(topic.topic_name)
            const result = {
                ...word,
                topic_name: topic.topic_name
              };
            res.send([result]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
}
module.exports = new WordsControllers();