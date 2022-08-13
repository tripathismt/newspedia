import React, { useEffect } from "react";
import axios from "axios";
import "./body.css";
import { useState } from "react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import noimage from "./noimage.jpg"


export default function Bodysec() {

  const [news, setnews] = useState([]);
  const [isDataFetching, setIsDataFetching] = useState(false);
  let [page, setpage] = useState(1);
  let previous = async()=>{

    setpage(page = page - 1);
    setIsDataFetching(true)
      await axios
        .get(
          `https://newsapi.org/v2/top-headlines?q=india&apiKey=1932358c23da4d88a436ccfd95f689d2&pageSize=16&page=${page}`
        )
        .then((Response) => {
          setnews(Response.data.articles);
        });
      setIsDataFetching(false)
    };
  
  
  let next = async()=>{
    setpage(page = page + 1);
    setIsDataFetching(true)
    await axios
      .get(
        `https://newsapi.org/v2/top-headlines?q=india&apiKey=1932358c23da4d88a436ccfd95f689d2&pageSize=16&page=${page}`
      )
      .then((Response) => {
        setnews(Response.data.articles);
      });
    setIsDataFetching(false)
  };
  
  useEffect(() => {
    const fetchnews = async () => {
      setIsDataFetching(true)
      await axios
        .get(
          `https://newsapi.org/v2/top-headlines?q=india&apiKey=1932358c23da4d88a436ccfd95f689d2&pageSize=16&page=${page}`
        )
        .then((Response) => {
          setnews(Response.data.articles);
        });
      setIsDataFetching(false)
    };
    
    fetchnews()
  },[])
  

  return (
    <>

      <div className="newscontainer">
        { isDataFetching ? 
          <div>
            Fetching Data....
          </div>
        :
        news.map((value) => {
          return (
            <div className="container">
              <img
                className="image"
                src={(value.urlToImage)===null ? noimage:value.urlToImage}
                alt="photo"
              />
              <h6 className="author">{value.author ? value.author:'Unknown'}</h6>
              <h2 className="heading">{value.title ? value.title:'Unknown'}</h2>
              <p className="description">
               {value.description ? value.description:'Description not available will be available soon wait for that or read the other news available on website.'}
              </p>
              <a href={value.url}>
              <button className="btn">Read More</button>
              </a>
            </div>
          );
        }
        
        )}
          <div className="button">
              <button disabled={page<=1} className="previous" onClick={previous}>&larr; Previous</button>
              <button className="next" onClick={next}>Next &rarr;</button>
            </div>

      </div>
    </>
  );
}
