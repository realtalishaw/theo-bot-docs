/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMoon = /* GraphQL */ `
  query GetMoon($id: ID!) {
    getMoon(id: $id) {
      id
      name
      planetID
      satellites {
        nextToken
        __typename
      }
      projects {
        nextToken
        __typename
      }
      files {
        nextToken
        __typename
      }
      chats {
        nextToken
        __typename
      }
      eventID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMoons = /* GraphQL */ `
  query ListMoons(
    $filter: ModelMoonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMoons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        planetID
        eventID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProjectRole = /* GraphQL */ `
  query GetProjectRole($id: ID!) {
    getProjectRole(id: $id) {
      id
      projectID
      title
      descriptio
      assignedTo {
        id
        firstName
        lastName
        email
        phone
        username
        completedOnboarding
        role
        bio
        projectID
        taskID
        eventID
        Status
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      projectRoleAssignedToId
      __typename
    }
  }
`;
export const listProjectRoles = /* GraphQL */ `
  query ListProjectRoles(
    $filter: ModelProjectRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectID
        title
        descriptio
        createdAt
        updatedAt
        projectRoleAssignedToId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      title
      description
      date
      time
      location
      attendees {
        nextToken
        __typename
      }
      moons {
        nextToken
        __typename
      }
      planets {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        date
        time
        location
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChat = /* GraphQL */ `
  query GetChat($id: ID!) {
    getChat(id: $id) {
      id
      planets {
        nextToken
        __typename
      }
      moons {
        nextToken
        __typename
      }
      projects {
        nextToken
        __typename
      }
      tasks {
        nextToken
        __typename
      }
      message
      sentAt
      sentBy {
        id
        firstName
        lastName
        email
        phone
        username
        completedOnboarding
        role
        bio
        projectID
        taskID
        eventID
        Status
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      chatSentById
      __typename
    }
  }
`;
export const listChats = /* GraphQL */ `
  query ListChats(
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        sentAt
        createdAt
        updatedAt
        chatSentById
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFile = /* GraphQL */ `
  query GetFile($id: ID!) {
    getFile(id: $id) {
      id
      planets {
        nextToken
        __typename
      }
      moons {
        nextToken
        __typename
      }
      projects {
        nextToken
        __typename
      }
      tasks {
        nextToken
        __typename
      }
      name
      url
      uploadedBy {
        id
        firstName
        lastName
        email
        phone
        username
        completedOnboarding
        role
        bio
        projectID
        taskID
        eventID
        Status
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      fileUploadedById
      __typename
    }
  }
`;
export const listFiles = /* GraphQL */ `
  query ListFiles(
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        url
        createdAt
        updatedAt
        fileUploadedById
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      projectID
      title
      description
      status
      assignedUsers {
        nextToken
        __typename
      }
      dueDate
      files {
        nextToken
        __typename
      }
      chats {
        nextToken
        __typename
      }
      notes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectID
        title
        description
        status
        dueDate
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      moonID
      name
      description
      status
      tasks {
        nextToken
        __typename
      }
      members {
        nextToken
        __typename
      }
      roles {
        nextToken
        __typename
      }
      files {
        nextToken
        __typename
      }
      chats {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        moonID
        name
        description
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSatellite = /* GraphQL */ `
  query GetSatellite($id: ID!) {
    getSatellite(id: $id) {
      id
      moonID
      title
      description
      User {
        id
        firstName
        lastName
        email
        phone
        username
        completedOnboarding
        role
        bio
        projectID
        taskID
        eventID
        Status
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      satelliteUserId
      __typename
    }
  }
`;
export const listSatellites = /* GraphQL */ `
  query ListSatellites(
    $filter: ModelSatelliteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSatellites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        moonID
        title
        description
        createdAt
        updatedAt
        satelliteUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPlanet = /* GraphQL */ `
  query GetPlanet($id: ID!) {
    getPlanet(id: $id) {
      id
      name
      description
      files {
        nextToken
        __typename
      }
      chats {
        nextToken
        __typename
      }
      moons {
        nextToken
        __typename
      }
      eventID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPlanets = /* GraphQL */ `
  query ListPlanets(
    $filter: ModelPlanetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlanets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        eventID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      userID
      planet {
        id
        name
        description
        eventID
        createdAt
        updatedAt
        __typename
      }
      satellite {
        id
        moonID
        title
        description
        createdAt
        updatedAt
        satelliteUserId
        __typename
      }
      createdAt
      updatedAt
      locationPlanetId
      locationSatelliteId
      __typename
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        createdAt
        updatedAt
        locationPlanetId
        locationSatelliteId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      phone
      username
      completedOnboarding
      role
      locations {
        nextToken
        __typename
      }
      bio
      projectID
      taskID
      eventID
      Status
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        email
        phone
        username
        completedOnboarding
        role
        bio
        projectID
        taskID
        eventID
        Status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMoonFile = /* GraphQL */ `
  query GetMoonFile($id: ID!) {
    getMoonFile(id: $id) {
      id
      moonId
      fileId
      moon {
        id
        name
        planetID
        eventID
        createdAt
        updatedAt
        __typename
      }
      file {
        id
        name
        url
        createdAt
        updatedAt
        fileUploadedById
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMoonFiles = /* GraphQL */ `
  query ListMoonFiles(
    $filter: ModelMoonFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMoonFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        moonId
        fileId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMoonChat = /* GraphQL */ `
  query GetMoonChat($id: ID!) {
    getMoonChat(id: $id) {
      id
      moonId
      chatId
      moon {
        id
        name
        planetID
        eventID
        createdAt
        updatedAt
        __typename
      }
      chat {
        id
        message
        sentAt
        createdAt
        updatedAt
        chatSentById
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMoonChats = /* GraphQL */ `
  query ListMoonChats(
    $filter: ModelMoonChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMoonChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        moonId
        chatId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPlanetChat = /* GraphQL */ `
  query GetPlanetChat($id: ID!) {
    getPlanetChat(id: $id) {
      id
      chatId
      planetId
      chat {
        id
        message
        sentAt
        createdAt
        updatedAt
        chatSentById
        __typename
      }
      planet {
        id
        name
        description
        eventID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPlanetChats = /* GraphQL */ `
  query ListPlanetChats(
    $filter: ModelPlanetChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlanetChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatId
        planetId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProjectChat = /* GraphQL */ `
  query GetProjectChat($id: ID!) {
    getProjectChat(id: $id) {
      id
      chatId
      projectId
      chat {
        id
        message
        sentAt
        createdAt
        updatedAt
        chatSentById
        __typename
      }
      project {
        id
        moonID
        name
        description
        status
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProjectChats = /* GraphQL */ `
  query ListProjectChats(
    $filter: ModelProjectChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatId
        projectId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTaskChat = /* GraphQL */ `
  query GetTaskChat($id: ID!) {
    getTaskChat(id: $id) {
      id
      chatId
      taskId
      chat {
        id
        message
        sentAt
        createdAt
        updatedAt
        chatSentById
        __typename
      }
      task {
        id
        projectID
        title
        description
        status
        dueDate
        notes
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTaskChats = /* GraphQL */ `
  query ListTaskChats(
    $filter: ModelTaskChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaskChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatId
        taskId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPlanetFile = /* GraphQL */ `
  query GetPlanetFile($id: ID!) {
    getPlanetFile(id: $id) {
      id
      fileId
      planetId
      file {
        id
        name
        url
        createdAt
        updatedAt
        fileUploadedById
        __typename
      }
      planet {
        id
        name
        description
        eventID
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPlanetFiles = /* GraphQL */ `
  query ListPlanetFiles(
    $filter: ModelPlanetFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlanetFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fileId
        planetId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProjectFile = /* GraphQL */ `
  query GetProjectFile($id: ID!) {
    getProjectFile(id: $id) {
      id
      fileId
      projectId
      file {
        id
        name
        url
        createdAt
        updatedAt
        fileUploadedById
        __typename
      }
      project {
        id
        moonID
        name
        description
        status
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProjectFiles = /* GraphQL */ `
  query ListProjectFiles(
    $filter: ModelProjectFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fileId
        projectId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTaskFile = /* GraphQL */ `
  query GetTaskFile($id: ID!) {
    getTaskFile(id: $id) {
      id
      fileId
      taskId
      file {
        id
        name
        url
        createdAt
        updatedAt
        fileUploadedById
        __typename
      }
      task {
        id
        projectID
        title
        description
        status
        dueDate
        notes
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTaskFiles = /* GraphQL */ `
  query ListTaskFiles(
    $filter: ModelTaskFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaskFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fileId
        taskId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const moonsByPlanetID = /* GraphQL */ `
  query MoonsByPlanetID(
    $planetID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMoonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    moonsByPlanetID(
      planetID: $planetID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        planetID
        eventID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const moonsByEventID = /* GraphQL */ `
  query MoonsByEventID(
    $eventID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMoonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    moonsByEventID(
      eventID: $eventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        planetID
        eventID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const projectRolesByProjectID = /* GraphQL */ `
  query ProjectRolesByProjectID(
    $projectID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectRolesByProjectID(
      projectID: $projectID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        title
        descriptio
        createdAt
        updatedAt
        projectRoleAssignedToId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const tasksByProjectID = /* GraphQL */ `
  query TasksByProjectID(
    $projectID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksByProjectID(
      projectID: $projectID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        title
        description
        status
        dueDate
        notes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const projectsByMoonID = /* GraphQL */ `
  query ProjectsByMoonID(
    $moonID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByMoonID(
      moonID: $moonID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        moonID
        name
        description
        status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const satellitesByMoonID = /* GraphQL */ `
  query SatellitesByMoonID(
    $moonID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSatelliteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    satellitesByMoonID(
      moonID: $moonID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        moonID
        title
        description
        createdAt
        updatedAt
        satelliteUserId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const planetsByEventID = /* GraphQL */ `
  query PlanetsByEventID(
    $eventID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPlanetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    planetsByEventID(
      eventID: $eventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        eventID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const locationsByUserID = /* GraphQL */ `
  query LocationsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    locationsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        createdAt
        updatedAt
        locationPlanetId
        locationSatelliteId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const usersByProjectID = /* GraphQL */ `
  query UsersByProjectID(
    $projectID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByProjectID(
      projectID: $projectID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        email
        phone
        username
        completedOnboarding
        role
        bio
        projectID
        taskID
        eventID
        Status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const usersByTaskID = /* GraphQL */ `
  query UsersByTaskID(
    $taskID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByTaskID(
      taskID: $taskID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        email
        phone
        username
        completedOnboarding
        role
        bio
        projectID
        taskID
        eventID
        Status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const usersByEventID = /* GraphQL */ `
  query UsersByEventID(
    $eventID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByEventID(
      eventID: $eventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        email
        phone
        username
        completedOnboarding
        role
        bio
        projectID
        taskID
        eventID
        Status
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const moonFilesByMoonId = /* GraphQL */ `
  query MoonFilesByMoonId(
    $moonId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMoonFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    moonFilesByMoonId(
      moonId: $moonId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        moonId
        fileId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const moonFilesByFileId = /* GraphQL */ `
  query MoonFilesByFileId(
    $fileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMoonFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    moonFilesByFileId(
      fileId: $fileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        moonId
        fileId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const moonChatsByMoonId = /* GraphQL */ `
  query MoonChatsByMoonId(
    $moonId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMoonChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    moonChatsByMoonId(
      moonId: $moonId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        moonId
        chatId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const moonChatsByChatId = /* GraphQL */ `
  query MoonChatsByChatId(
    $chatId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMoonChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    moonChatsByChatId(
      chatId: $chatId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        moonId
        chatId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const planetChatsByChatId = /* GraphQL */ `
  query PlanetChatsByChatId(
    $chatId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPlanetChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    planetChatsByChatId(
      chatId: $chatId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatId
        planetId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const planetChatsByPlanetId = /* GraphQL */ `
  query PlanetChatsByPlanetId(
    $planetId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPlanetChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    planetChatsByPlanetId(
      planetId: $planetId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatId
        planetId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const projectChatsByChatId = /* GraphQL */ `
  query ProjectChatsByChatId(
    $chatId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectChatsByChatId(
      chatId: $chatId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatId
        projectId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const projectChatsByProjectId = /* GraphQL */ `
  query ProjectChatsByProjectId(
    $projectId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectChatsByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatId
        projectId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const taskChatsByChatId = /* GraphQL */ `
  query TaskChatsByChatId(
    $chatId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taskChatsByChatId(
      chatId: $chatId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatId
        taskId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const taskChatsByTaskId = /* GraphQL */ `
  query TaskChatsByTaskId(
    $taskId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taskChatsByTaskId(
      taskId: $taskId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatId
        taskId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const planetFilesByFileId = /* GraphQL */ `
  query PlanetFilesByFileId(
    $fileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPlanetFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    planetFilesByFileId(
      fileId: $fileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fileId
        planetId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const planetFilesByPlanetId = /* GraphQL */ `
  query PlanetFilesByPlanetId(
    $planetId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPlanetFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    planetFilesByPlanetId(
      planetId: $planetId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fileId
        planetId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const projectFilesByFileId = /* GraphQL */ `
  query ProjectFilesByFileId(
    $fileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectFilesByFileId(
      fileId: $fileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fileId
        projectId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const projectFilesByProjectId = /* GraphQL */ `
  query ProjectFilesByProjectId(
    $projectId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectFilesByProjectId(
      projectId: $projectId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fileId
        projectId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const taskFilesByFileId = /* GraphQL */ `
  query TaskFilesByFileId(
    $fileId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taskFilesByFileId(
      fileId: $fileId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fileId
        taskId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const taskFilesByTaskId = /* GraphQL */ `
  query TaskFilesByTaskId(
    $taskId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taskFilesByTaskId(
      taskId: $taskId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        fileId
        taskId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
