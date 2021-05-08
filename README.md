# Board - Ticket
Any problem, please email me: <mark>***hitxcl@gmail.com***</mark>

![Sign Up Page](imgs/signup-page.png)
![Board Page](imgs/board-page.png)
![Ticket Page](imgs/ticket-page.png)

## Project Structure

```
.
├── README.md
├── imgs
│   ├── board-page.png
│   ├── signup-page.png
│   └── ticket-page.png
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── reset.css
│   └── robots.txt
├── schema.gql                    // Generated AWS Api gateway schema
├── src
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── apollo                    // Apollo client initialization
│   │   ├── cache.ts
│   │   └── index.ts
│   ├── components                // Basic components
│   │   ├── AddBoard
│   │   │   ├── index.css
│   │   │   └── index.tsx
│   │   ├── AddTicket
│   │   │   ├── index.css
│   │   │   └── index.tsx
│   │   ├── BoardItem
│   │   │   ├── index.css
│   │   │   └── index.tsx
│   │   ├── BoardPanel
│   │   │   ├── index.css
│   │   │   └── index.tsx
│   │   ├── Column
│   │   │   ├── index.css
│   │   │   └── index.tsx
│   │   ├── Header
│   │   │   ├── index.css
│   │   │   └── index.tsx
│   │   ├── Overlay
│   │   │   ├── index.css
│   │   │   └── index.tsx
│   │   ├── TicketItem
│   │   │   ├── index.css
│   │   │   └── index.tsx
│   │   └── UserForm
│   │       ├── index.css
│   │       └── index.tsx
│   ├── containers              // Container components
│   │   ├── BoardPanel.tsx
│   │   ├── TicketPanel.tsx
│   │   └── UserForm.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── models                  // Model types: local & remote
│   │   ├── locatType.ts
│   │   └── type.ts             // Generated type from schema.gql
│   ├── operations              // AWS Command & Query
│   │   ├── mutations
│   │   │   ├── createUser.ts
│   │   │   ├── deleteTicket.ts
│   │   │   ├── putBoard.ts
│   │   │   ├── putTicket.ts
│   │   │   └── registerOrganisation.ts
│   │   └── queries
│   │       ├── appState.ts
│   │       ├── getBoard.ts
│   │       └── getOrganisation.ts
│   ├── pages                  // Page components
│   │   ├── Board.tsx
│   │   ├── SignUp.tsx
│   │   └── Ticket.tsx
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   └── utils
│       └── keyUtil.ts        // Generate key for Local Storage
├── tree.text
├── tsconfig.json
└── yarn.lock
```


## Technology Stack

[Apollo Client for React](https://www.apollographql.com/docs/react/)

## Run Me
In order to avoid polluting the given service & data, application could <mark>***run in different environment***</mark>. Run the following command if you didn't install dotenv-cli before.

```
> yarn global add dotenv-cli
```
### Run for Development
All the operation will take effect in [Ryan-Dev](https://14g8921io8.execute-api.us-east-1.amazonaws.com/ryan-dev-ticket) environment

```
> yarn start:dev
```

### Run for Test
All the operation will take effect in [Phocas-Given](https://14g8921io8.execute-api.us-east-1.amazonaws.com/ryan-dev-ticket) environment

```
> yarn start
```

## Notice
* No responsive design, use <mark>***full screen in Chrome***</mark> for better UI presentation.
* <mark>***No Unit Test***</mark> for this project, but most of the components are testable.

* Modify schema of Query Board for easy implementing ticket deletion

```
query board($organisationId: ID!, $boardId: ID!) {
  board(organisationId: $organisationId, boardId: $boardId) {
    id
    ...
    tickets {
      id      // add id here
      name
      ...
    }  
  }
```

* Refresh or GoBack operation will lead to <mark>***lose the current staus***</mark>, application will go to the Sign-Up page.

## Conventions
* Board Update & Deletion are not supported currently.
* You can only create <mark>***todo-status tikets***</mark> by the understanding of each ticket should start its lifecycle at todo status.

