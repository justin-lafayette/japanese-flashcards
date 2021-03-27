import React from 'react';
import Container from '../components/Container';

function Links() {

    const links= [
        {
            "name": "Tofugu's Ultimate Guide",
            "site": "https://www.tofugu.com/learn-japanese/",
            "description": "Free Online Japanese learning course."
        },
        {
            "name": "Tofugu's Ultimate Guide to Hiragana",
            "site": "https://www.tofugu.com/japanese/learn-hiragana/",
            "description": "Guide on how to pronounce and visualize Hiragana"
        },
        {
            "name": "Tofugu's Ultimate Guide to Katakana",
            "site": "https://www.tofugu.com/japanese/learn-katakana/",
            "description": "Guide on how to pronounce and visualize Katakana"
        },
        {
            "name": "Tofugu's Kana quiz",
            "site": "https://kana-quiz.tofugu.com/",
            "description": "Tofugu's free online quiz for learning Hiragana and Katakana. This was the inspiration for this project."
        },
        {
            "name": "Wanikani: Kanji Learning",
            "site": "https://www.wanikani.com/login",
            "description": "Online learning resource for studying Kanji. This service is free up to a point."
        },
        {
            "name": "KanjiApi.Dev",
            "site": "https://kanjiapi.dev/",
            "description": "API for pulling Kanji to the project. Site offers a download json option for all the Kanji in their database."
        }
    ]
  return (
    <Container
        className={"fluid"}
    >
        <Container>

            <h1>Links & Resources</h1>
            
            {links.map( (value, index) => (
                <div className="row" key={index}>
                    <h4>{value.name}</h4>
                    <div>{value.description}</div>
                    <a href={value.site}>Visit</a>
                </div>
            ))}


        </Container>

    </Container>
  );
}

export default Links;