// @flow
/**
 * Created by Zoho on 16/9/28.
 */

export type actionType = {
  +type: string,
  payload?: any
};
export type dispatchType = actionType => void;
export type dispatchCreator = dispatchType => void;

