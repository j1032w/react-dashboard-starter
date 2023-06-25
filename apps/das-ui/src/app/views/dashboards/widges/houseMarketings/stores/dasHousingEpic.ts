import {ofType} from 'redux-observable';
import {catchError, map, of, switchMap} from 'rxjs';
import {ajax} from 'rxjs/internal/ajax/ajax';
import {dasHousingMongoQuery} from './dasHousingMongoQuery';
import {fetchDasHousingData, fetchDasHousingDataFailure, fetchDasHousingDataSuccess} from './dasHousingSlice';


export const fetchDasHousingDataEpic = (action$) =>
  action$.pipe(
    ofType(fetchDasHousingData),
    switchMap(() =>
      ajax({
          url: 'https://192.168.1.101/v1/housing-market/search',
          method: 'GET',
          body: dasHousingMongoQuery

        }
      ).pipe(
        map((response) => fetchDasHousingDataSuccess(response)),
        catchError((error) => of(fetchDasHousingDataFailure(error)))
      )
    )
  );
