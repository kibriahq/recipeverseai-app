import { action, persist, Action, computed } from "easy-peasy";

import { Session } from "@supabase/supabase-js";


type User = Record<string, any>;

export type AuthModel = {
  user: User;
  isAuth: any;
  session: Session | null;

  setAuth: Action<AuthModel, User>;
  logout: Action<AuthModel, User>;
};

const authModel = persist<AuthModel>(
  {
    user: {},
    session: null,

    isAuth: computed((state: any) => !!state.session),

    setAuth: action((state, {user, session}) => {
      state.user = {...state.user, ...user};
      state.session = session;
    }),

    logout: action((state) => {
      state.user = {};
      state.session = null;
    }),
  },
  {
    storage: "localStorage",
  },
);

export default authModel;
