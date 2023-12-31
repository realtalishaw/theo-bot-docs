/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMoon = /* GraphQL */ `
  mutation CreateMoon(
    $input: CreateMoonInput!
    $condition: ModelMoonConditionInput
  ) {
    createMoon(input: $input, condition: $condition) {
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
export const updateMoon = /* GraphQL */ `
  mutation UpdateMoon(
    $input: UpdateMoonInput!
    $condition: ModelMoonConditionInput
  ) {
    updateMoon(input: $input, condition: $condition) {
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
export const deleteMoon = /* GraphQL */ `
  mutation DeleteMoon(
    $input: DeleteMoonInput!
    $condition: ModelMoonConditionInput
  ) {
    deleteMoon(input: $input, condition: $condition) {
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
export const createProjectRole = /* GraphQL */ `
  mutation CreateProjectRole(
    $input: CreateProjectRoleInput!
    $condition: ModelProjectRoleConditionInput
  ) {
    createProjectRole(input: $input, condition: $condition) {
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
export const updateProjectRole = /* GraphQL */ `
  mutation UpdateProjectRole(
    $input: UpdateProjectRoleInput!
    $condition: ModelProjectRoleConditionInput
  ) {
    updateProjectRole(input: $input, condition: $condition) {
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
export const deleteProjectRole = /* GraphQL */ `
  mutation DeleteProjectRole(
    $input: DeleteProjectRoleInput!
    $condition: ModelProjectRoleConditionInput
  ) {
    deleteProjectRole(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createChat = /* GraphQL */ `
  mutation CreateChat(
    $input: CreateChatInput!
    $condition: ModelChatConditionInput
  ) {
    createChat(input: $input, condition: $condition) {
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
export const updateChat = /* GraphQL */ `
  mutation UpdateChat(
    $input: UpdateChatInput!
    $condition: ModelChatConditionInput
  ) {
    updateChat(input: $input, condition: $condition) {
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
export const deleteChat = /* GraphQL */ `
  mutation DeleteChat(
    $input: DeleteChatInput!
    $condition: ModelChatConditionInput
  ) {
    deleteChat(input: $input, condition: $condition) {
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
export const createFile = /* GraphQL */ `
  mutation CreateFile(
    $input: CreateFileInput!
    $condition: ModelFileConditionInput
  ) {
    createFile(input: $input, condition: $condition) {
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
export const updateFile = /* GraphQL */ `
  mutation UpdateFile(
    $input: UpdateFileInput!
    $condition: ModelFileConditionInput
  ) {
    updateFile(input: $input, condition: $condition) {
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
export const deleteFile = /* GraphQL */ `
  mutation DeleteFile(
    $input: DeleteFileInput!
    $condition: ModelFileConditionInput
  ) {
    deleteFile(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createSatellite = /* GraphQL */ `
  mutation CreateSatellite(
    $input: CreateSatelliteInput!
    $condition: ModelSatelliteConditionInput
  ) {
    createSatellite(input: $input, condition: $condition) {
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
export const updateSatellite = /* GraphQL */ `
  mutation UpdateSatellite(
    $input: UpdateSatelliteInput!
    $condition: ModelSatelliteConditionInput
  ) {
    updateSatellite(input: $input, condition: $condition) {
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
export const deleteSatellite = /* GraphQL */ `
  mutation DeleteSatellite(
    $input: DeleteSatelliteInput!
    $condition: ModelSatelliteConditionInput
  ) {
    deleteSatellite(input: $input, condition: $condition) {
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
export const createPlanet = /* GraphQL */ `
  mutation CreatePlanet(
    $input: CreatePlanetInput!
    $condition: ModelPlanetConditionInput
  ) {
    createPlanet(input: $input, condition: $condition) {
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
export const updatePlanet = /* GraphQL */ `
  mutation UpdatePlanet(
    $input: UpdatePlanetInput!
    $condition: ModelPlanetConditionInput
  ) {
    updatePlanet(input: $input, condition: $condition) {
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
export const deletePlanet = /* GraphQL */ `
  mutation DeletePlanet(
    $input: DeletePlanetInput!
    $condition: ModelPlanetConditionInput
  ) {
    deletePlanet(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createMoonFile = /* GraphQL */ `
  mutation CreateMoonFile(
    $input: CreateMoonFileInput!
    $condition: ModelMoonFileConditionInput
  ) {
    createMoonFile(input: $input, condition: $condition) {
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
export const updateMoonFile = /* GraphQL */ `
  mutation UpdateMoonFile(
    $input: UpdateMoonFileInput!
    $condition: ModelMoonFileConditionInput
  ) {
    updateMoonFile(input: $input, condition: $condition) {
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
export const deleteMoonFile = /* GraphQL */ `
  mutation DeleteMoonFile(
    $input: DeleteMoonFileInput!
    $condition: ModelMoonFileConditionInput
  ) {
    deleteMoonFile(input: $input, condition: $condition) {
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
export const createMoonChat = /* GraphQL */ `
  mutation CreateMoonChat(
    $input: CreateMoonChatInput!
    $condition: ModelMoonChatConditionInput
  ) {
    createMoonChat(input: $input, condition: $condition) {
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
export const updateMoonChat = /* GraphQL */ `
  mutation UpdateMoonChat(
    $input: UpdateMoonChatInput!
    $condition: ModelMoonChatConditionInput
  ) {
    updateMoonChat(input: $input, condition: $condition) {
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
export const deleteMoonChat = /* GraphQL */ `
  mutation DeleteMoonChat(
    $input: DeleteMoonChatInput!
    $condition: ModelMoonChatConditionInput
  ) {
    deleteMoonChat(input: $input, condition: $condition) {
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
export const createPlanetChat = /* GraphQL */ `
  mutation CreatePlanetChat(
    $input: CreatePlanetChatInput!
    $condition: ModelPlanetChatConditionInput
  ) {
    createPlanetChat(input: $input, condition: $condition) {
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
export const updatePlanetChat = /* GraphQL */ `
  mutation UpdatePlanetChat(
    $input: UpdatePlanetChatInput!
    $condition: ModelPlanetChatConditionInput
  ) {
    updatePlanetChat(input: $input, condition: $condition) {
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
export const deletePlanetChat = /* GraphQL */ `
  mutation DeletePlanetChat(
    $input: DeletePlanetChatInput!
    $condition: ModelPlanetChatConditionInput
  ) {
    deletePlanetChat(input: $input, condition: $condition) {
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
export const createProjectChat = /* GraphQL */ `
  mutation CreateProjectChat(
    $input: CreateProjectChatInput!
    $condition: ModelProjectChatConditionInput
  ) {
    createProjectChat(input: $input, condition: $condition) {
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
export const updateProjectChat = /* GraphQL */ `
  mutation UpdateProjectChat(
    $input: UpdateProjectChatInput!
    $condition: ModelProjectChatConditionInput
  ) {
    updateProjectChat(input: $input, condition: $condition) {
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
export const deleteProjectChat = /* GraphQL */ `
  mutation DeleteProjectChat(
    $input: DeleteProjectChatInput!
    $condition: ModelProjectChatConditionInput
  ) {
    deleteProjectChat(input: $input, condition: $condition) {
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
export const createTaskChat = /* GraphQL */ `
  mutation CreateTaskChat(
    $input: CreateTaskChatInput!
    $condition: ModelTaskChatConditionInput
  ) {
    createTaskChat(input: $input, condition: $condition) {
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
export const updateTaskChat = /* GraphQL */ `
  mutation UpdateTaskChat(
    $input: UpdateTaskChatInput!
    $condition: ModelTaskChatConditionInput
  ) {
    updateTaskChat(input: $input, condition: $condition) {
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
export const deleteTaskChat = /* GraphQL */ `
  mutation DeleteTaskChat(
    $input: DeleteTaskChatInput!
    $condition: ModelTaskChatConditionInput
  ) {
    deleteTaskChat(input: $input, condition: $condition) {
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
export const createPlanetFile = /* GraphQL */ `
  mutation CreatePlanetFile(
    $input: CreatePlanetFileInput!
    $condition: ModelPlanetFileConditionInput
  ) {
    createPlanetFile(input: $input, condition: $condition) {
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
export const updatePlanetFile = /* GraphQL */ `
  mutation UpdatePlanetFile(
    $input: UpdatePlanetFileInput!
    $condition: ModelPlanetFileConditionInput
  ) {
    updatePlanetFile(input: $input, condition: $condition) {
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
export const deletePlanetFile = /* GraphQL */ `
  mutation DeletePlanetFile(
    $input: DeletePlanetFileInput!
    $condition: ModelPlanetFileConditionInput
  ) {
    deletePlanetFile(input: $input, condition: $condition) {
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
export const createProjectFile = /* GraphQL */ `
  mutation CreateProjectFile(
    $input: CreateProjectFileInput!
    $condition: ModelProjectFileConditionInput
  ) {
    createProjectFile(input: $input, condition: $condition) {
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
export const updateProjectFile = /* GraphQL */ `
  mutation UpdateProjectFile(
    $input: UpdateProjectFileInput!
    $condition: ModelProjectFileConditionInput
  ) {
    updateProjectFile(input: $input, condition: $condition) {
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
export const deleteProjectFile = /* GraphQL */ `
  mutation DeleteProjectFile(
    $input: DeleteProjectFileInput!
    $condition: ModelProjectFileConditionInput
  ) {
    deleteProjectFile(input: $input, condition: $condition) {
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
export const createTaskFile = /* GraphQL */ `
  mutation CreateTaskFile(
    $input: CreateTaskFileInput!
    $condition: ModelTaskFileConditionInput
  ) {
    createTaskFile(input: $input, condition: $condition) {
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
export const updateTaskFile = /* GraphQL */ `
  mutation UpdateTaskFile(
    $input: UpdateTaskFileInput!
    $condition: ModelTaskFileConditionInput
  ) {
    updateTaskFile(input: $input, condition: $condition) {
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
export const deleteTaskFile = /* GraphQL */ `
  mutation DeleteTaskFile(
    $input: DeleteTaskFileInput!
    $condition: ModelTaskFileConditionInput
  ) {
    deleteTaskFile(input: $input, condition: $condition) {
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
