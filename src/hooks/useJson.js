import { useCallback, useEffect, useState } from "react";
import { decode } from "../utils";

/**
 * The useJson() hook takes a JSON path and parse it into an object 
 * and decodes data if it was encoded by encodeURIComponent or by a similar routine.
 * @param {string} path 
 * @returns {object} Array of objects
 */
export const useJson = (path) => {
  const data = JSON.parse(JSON.stringify(path));
  const [dataToReturn, setDataToReturn] = useState([])

  const cb = useCallback(() => {
    let temp = []
      for(let i = 0; i < data.length; i++){
        for(var x in data[i]){
          if(Array.isArray(data[i][x])) {
            data[i][x] = data[i][x].map(e => decode(e))
          } else {
            data[i][x] = decode(data[i][x])
          }
        }
        temp = [...temp, data[i]]
      }
      setDataToReturn(temp)
  }, [data])

  useEffect(() => {
      cb()
  }, [])

  return [dataToReturn]
}