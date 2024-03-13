import { __CHAIN_IDS__, __RPCS__ } from "@/constants";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface RPCNodeState {
  [key: number]: {
    serviceName: string;
    url: string;
  };
}

const initialState: RPCNodeState = (() => {
  let state: {
    [x: number]: {
      serviceName: string;
      url: string;
    };
  } = {};

  const derived = Object.values(__CHAIN_IDS__).map(val => ({
    [val]: __RPCS__[val][0]
  }));

  derived.forEach(val => {
    state = { ...state, ...val };
  });

  return state;
})();

export const createRPCNodeSlice = createSlice({
  name: "RPC Node",
  initialState,
  reducers: {
    changeRPCNode: (
      state,
      action: PayloadAction<{
        chainId: number;
        value: {
          serviceName: string;
          url: string;
        };
      }>
    ) => {
      state[action.payload.chainId] = action.payload.value;
    }
  }
});

export const { changeRPCNode } = createRPCNodeSlice.actions;
export default createRPCNodeSlice.reducer;
