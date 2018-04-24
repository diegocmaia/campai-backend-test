import _ from 'lodash'

import contactsServices from '../services/contacts'
import contactGroupsServices from '../services/contactGroups'
import organizationsServices from '../services/organizations'
import helpers from '../helpers'

/**
 * @api {get} /search Get all orgs, contacts and groups according to the text filter
 * @apiName Search
 * @apiGroup Search
 * 
 * @apiParam {String} [text] Text to be searched. If it's empty, an empty object will be returned
 * @apiPAram {Number} [limit = 10] Limit of results per entity.
 * 
 * @apiExample {curl} Exemple of usage:
 * curl -X GET 'http://localhost:3003/api/search?text=OSC%20Bremerhaven&limit=5'
 * 
 * @apiSuccessExample {json} Example of response:
 *  HTTP/1.1 200 OK
 *    {
 *      "contacts": {
 *          "info": {
 *              "total": 1,
 *              "limit": 5
 *          },
 *          "data": [
 *              {
 *                  "full_name": "Aaliyah Koczulla",
 *                  "avatar": {
 *                      "top_type": "ShortHairShaggyMullet",
 *                      "eye_type": "Wink",
 *                      "mouth_type": "Twinkle",
 *                      "skin_color": "DarkBrown",
 *                      "clothe_type": "ShirtScoopNeck",
 *                      "eyebrow_type": "RaisedExcited",
 *                      "accessories_type": "Sunglasses"
 *                  },
 *                  "city": "Nord Milladorf",
 *                  "org_name": "SV Bergisch Gladbach 09"
 *              }
 *          ]
 *      },
 *      "groups": {
 *          "info": {
 *              "total": 1,
 *              "limit": 5
 *          },
 *          "data": [
 *              {
 *                  "name": "Busse - Lakomy",
 *                  "city": "Alt Elias"
 *              }
 *          ]
 *      },
 *      "orgs": {
 *          "info": {
 *              "total": 1,
 *              "limit": 5
 *          },
 *          "data": [
 *              {
 *                  "name": "SV Bergisch Gladbach 09",
 *                  "city": "Leidedorf",
 *                  "type": "other"
 *              }
 *          ]
 *      }
 *    }
 */
export async function searchDataByInput (req, res) {
  const { text } = req.query
  let limit = req.query.limit || 10
  
  const promises = []
  let result = {}

  try {
    if(text && typeof text !== 'string') {
      res.status(400).send({error: 'Text should be a string'})
    } else if (limit && !_.toNumber(limit)) {
      res.status(400).send({error: 'Limit should be a number'})
    } else {
      if(!_.isEmpty(text)) {
        const orgs = await organizationsServices.filterOrgsByInput(text)
        const contacts = await contactsServices.filterContactsByInput(text)
        const groups = await contactGroupsServices.filterContactGroupsByInput(text)
        limit = _.toNumber(limit)
        result = helpers.formatSearchResult({ orgs, contacts, groups, limit })
      }
      res.json(result)
    }
  } catch (err) {
    console.log(err)
    res.status(500).send({error: err})
  }
}
