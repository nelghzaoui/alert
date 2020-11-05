import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { CoreModule } from 'src/app/modules/core/core.module';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};



export type AccountType = {
  id: Scalars['ID'];
  name: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  creationDate: Scalars['DateTime'];
};


export type AddressType = {
  city: Scalars['String'];
  postCode: Scalars['Int'];
  street: Scalars['String'];
  streetNumber: Scalars['Int'];
};

export type AlertType = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  type: Scalars['String'];
  address: AddressType;
  isAcknowledge: Scalars['Boolean'];
  isEnd: Scalars['Boolean'];
  creationDate: Scalars['DateTime'];
};

export type ServerType = {
  id: Scalars['ID'];
  name: Scalars['String'];
  url: Scalars['String'];
  port: Scalars['Int'];
};

export type Query = {
  accounts: Array<AccountType>;
  account: AccountType;
  alerts: Array<AlertType>;
  alert: AlertType;
  servers: Array<ServerType>;
  server: ServerType;
};


export type QueryAccountArgs = {
  id: Scalars['String'];
};


export type QueryAlertArgs = {
  id: Scalars['String'];
};


export type QueryServerArgs = {
  id: Scalars['String'];
};

export type Mutation = {
  addAccount: AccountType;
  updateAccount: AccountType;
  deleteAccount: AccountType;
  addAlert: AlertType;
  updateServer: ServerType;
  deleteServer: ServerType;
  addServer: ServerType;
};


export type MutationAddAccountArgs = {
  input: AccountInput;
};


export type MutationUpdateAccountArgs = {
  input: AccountInput;
  id: Scalars['String'];
};


export type MutationDeleteAccountArgs = {
  id: Scalars['String'];
};


export type MutationAddAlertArgs = {
  input: AlertInput;
};


export type MutationUpdateServerArgs = {
  input: ServerInput;
  id: Scalars['String'];
};


export type MutationDeleteServerArgs = {
  id: Scalars['String'];
};


export type MutationAddServerArgs = {
  input: ServerInput;
};

export type AccountInput = {
  name: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  creationDate: Scalars['DateTime'];
};

export type AlertInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  type: Scalars['String'];
  address: AddressInput;
  isAcknowledge: Scalars['Boolean'];
  isEnd: Scalars['Boolean'];
  creationDate: Scalars['DateTime'];
};

export type AddressInput = {
  city: Scalars['String'];
  postCode: Scalars['Int'];
  street: Scalars['String'];
  streetNumber: Scalars['Int'];
};

export type ServerInput = {
  name: Scalars['String'];
  url: Scalars['String'];
  port: Scalars['Int'];
};

export type AccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountsQuery = { accounts: Array<Pick<AccountType, 'id' | 'name' | 'username' | 'email' | 'password' | 'creationDate'>> };

export type AccountQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AccountQuery = { account: Pick<AccountType, 'id' | 'name' | 'username' | 'email' | 'password' | 'creationDate'> };

export type ServersQueryVariables = Exact<{ [key: string]: never; }>;


export type ServersQuery = { servers: Array<Pick<ServerType, 'id' | 'name' | 'url' | 'port'>> };

export type ServerQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ServerQuery = { server: Pick<ServerType, 'id' | 'name' | 'url' | 'port'> };

export type AddServerMutationVariables = Exact<{
  input: ServerInput;
}>;


export type AddServerMutation = { addServer: Pick<ServerType, 'id' | 'name' | 'url' | 'port'> };

export type UpdateServerMutationVariables = Exact<{
  input: ServerInput;
  id: Scalars['String'];
}>;


export type UpdateServerMutation = { updateServer: Pick<ServerType, 'id' | 'name' | 'url' | 'port'> };

export type DeleteServerMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteServerMutation = { deleteServer: Pick<ServerType, 'id' | 'name' | 'url' | 'port'> };

export const AccountsDocument = gql`
    query accounts {
  accounts {
    id
    name
    username
    email
    password
    creationDate
  }
}
    `;

  @Injectable({
    providedIn: CoreModule
  })
  export class AccountsGQL extends Apollo.Query<AccountsQuery, AccountsQueryVariables> {
    document = AccountsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AccountDocument = gql`
    query account($id: String!) {
  account(id: $id) {
    id
    name
    username
    email
    password
    creationDate
  }
}
    `;

  @Injectable({
    providedIn: CoreModule
  })
  export class AccountGQL extends Apollo.Query<AccountQuery, AccountQueryVariables> {
    document = AccountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ServersDocument = gql`
    query servers {
  servers {
    id
    name
    url
    port
  }
}
    `;

  @Injectable({
    providedIn: CoreModule
  })
  export class ServersGQL extends Apollo.Query<ServersQuery, ServersQueryVariables> {
    document = ServersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ServerDocument = gql`
    query server($id: String!) {
  server(id: $id) {
    id
    name
    url
    port
  }
}
    `;

  @Injectable({
    providedIn: CoreModule
  })
  export class ServerGQL extends Apollo.Query<ServerQuery, ServerQueryVariables> {
    document = ServerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AddServerDocument = gql`
    mutation addServer($input: ServerInput!) {
  addServer(input: $input) {
    id
    name
    url
    port
  }
}
    `;

  @Injectable({
    providedIn: CoreModule
  })
  export class AddServerGQL extends Apollo.Mutation<AddServerMutation, AddServerMutationVariables> {
    document = AddServerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateServerDocument = gql`
    mutation updateServer($input: ServerInput!, $id: String!) {
  updateServer(input: $input, id: $id) {
    id
    name
    url
    port
  }
}
    `;

  @Injectable({
    providedIn: CoreModule
  })
  export class UpdateServerGQL extends Apollo.Mutation<UpdateServerMutation, UpdateServerMutationVariables> {
    document = UpdateServerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DeleteServerDocument = gql`
    mutation deleteServer($id: String!) {
  deleteServer(id: $id) {
    id
    name
    url
    port
  }
}
    `;

  @Injectable({
    providedIn: CoreModule
  })
  export class DeleteServerGQL extends Apollo.Mutation<DeleteServerMutation, DeleteServerMutationVariables> {
    document = DeleteServerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }