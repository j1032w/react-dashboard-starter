export const dasHousingMongoQuery = {
  "$or": [
    {
      "$and": [
        {
          "city": {
            "$eq": "Calgary"
          }
        },
        {
          "buildingBedroom": {
            "$gt": 2
          }
        },
        {
          "listedTime": {
            "$gt": "2023-04-01"
          }
        },
        {
          "priceUnformattedValue": {
            "$gt": 200000
          }
        },
        {
          "priceUnformattedValue": {
            "$lte": 800000
          }
        }
      ]
    },
    {
      "$and": [
        {
          "city": {
            "$in": [
              "Toronto",
              "Vancouver",
              "Montreal"
            ]
          }
        },
        {
          "buildingBedroom": {
            "$gt": 2
          }
        },
        {
          "buildingBathroomTotal": {
            "$gt": 2
          }
        }
      ]
    }
  ]
}
