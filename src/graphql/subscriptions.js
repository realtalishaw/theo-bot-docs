/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMoon = /* GraphQL */ `
  subscription OnCreateMoon($filter: ModelSubscriptionMoonFilterInput) {
    onCreateMoon(filter: $filter) {
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
export const onUpdateMoon = /* GraphQL */ `
  subscription OnUpdateMoon($filter: ModelSubscriptionMoonFilterInput) {
    onUpdateMoon(filter: $filter) {
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
export const onDeleteMoon = /* GraphQL */ `
  subscription OnDeleteMoon($filter: ModelSubscriptionMoonFilterInput) {
    onDeleteMoon(filter: $filter) {
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
export const onCreateProjectRole = /* GraphQL */ `
  subscription OnCreateProjectRole(
    $filter: ModelSubscriptionProjectRoleFilterInput
  ) {
    onCreateProjectRole(filter: $filter) {
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
export const onUpdateProjectRole = /* GraphQL */ `
  subscription OnUpdateProjectRole(
    $filter: ModelSubscriptionProjectRoleFilterInput
  ) {
    onUpdateProjectRole(filter: $filter) {
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
export const onDeleteProjectRole = /* GraphQL */ `
  subscription OnDeleteProjectRole(
    $filter: ModelSubscriptionProjectRoleFilterInput
  ) {
    onDeleteProjectRole(filter: $filter) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
export const onCreateChat = /* GraphQL */ `
  subscription OnCreateChat($filter: ModelSubscriptionChatFilterInput) {
    onCreateChat(filter: $filter) {
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
export const onUpdateChat = /* GraphQL */ `
  subscription OnUpdateChat($filter: ModelSubscriptionChatFilterInput) {
    onUpdateChat(filter: $filter) {
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
export const onDeleteChat = /* GraphQL */ `
  subscription OnDeleteChat($filter: ModelSubscriptionChatFilterInput) {
    onDeleteChat(filter: $filter) {
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
export const onCreateFile = /* GraphQL */ `
  subscription OnCreateFile($filter: ModelSubscriptionFileFilterInput) {
    onCreateFile(filter: $filter) {
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
export const onUpdateFile = /* GraphQL */ `
  subscription OnUpdateFile($filter: ModelSubscriptionFileFilterInput) {
    onUpdateFile(filter: $filter) {
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
export const onDeleteFile = /* GraphQL */ `
  subscription OnDeleteFile($filter: ModelSubscriptionFileFilterInput) {
    onDeleteFile(filter: $filter) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
export const onCreateSatellite = /* GraphQL */ `
  subscription OnCreateSatellite(
    $filter: ModelSubscriptionSatelliteFilterInput
  ) {
    onCreateSatellite(filter: $filter) {
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
export const onUpdateSatellite = /* GraphQL */ `
  subscription OnUpdateSatellite(
    $filter: ModelSubscriptionSatelliteFilterInput
  ) {
    onUpdateSatellite(filter: $filter) {
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
export const onDeleteSatellite = /* GraphQL */ `
  subscription OnDeleteSatellite(
    $filter: ModelSubscriptionSatelliteFilterInput
  ) {
    onDeleteSatellite(filter: $filter) {
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
export const onCreatePlanet = /* GraphQL */ `
  subscription OnCreatePlanet($filter: ModelSubscriptionPlanetFilterInput) {
    onCreatePlanet(filter: $filter) {
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
export const onUpdatePlanet = /* GraphQL */ `
  subscription OnUpdatePlanet($filter: ModelSubscriptionPlanetFilterInput) {
    onUpdatePlanet(filter: $filter) {
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
export const onDeletePlanet = /* GraphQL */ `
  subscription OnDeletePlanet($filter: ModelSubscriptionPlanetFilterInput) {
    onDeletePlanet(filter: $filter) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onCreateLocation(filter: $filter) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onUpdateLocation(filter: $filter) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
    onDeleteLocation(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateMoonFile = /* GraphQL */ `
  subscription OnCreateMoonFile($filter: ModelSubscriptionMoonFileFilterInput) {
    onCreateMoonFile(filter: $filter) {
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
export const onUpdateMoonFile = /* GraphQL */ `
  subscription OnUpdateMoonFile($filter: ModelSubscriptionMoonFileFilterInput) {
    onUpdateMoonFile(filter: $filter) {
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
export const onDeleteMoonFile = /* GraphQL */ `
  subscription OnDeleteMoonFile($filter: ModelSubscriptionMoonFileFilterInput) {
    onDeleteMoonFile(filter: $filter) {
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
export const onCreateMoonChat = /* GraphQL */ `
  subscription OnCreateMoonChat($filter: ModelSubscriptionMoonChatFilterInput) {
    onCreateMoonChat(filter: $filter) {
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
export const onUpdateMoonChat = /* GraphQL */ `
  subscription OnUpdateMoonChat($filter: ModelSubscriptionMoonChatFilterInput) {
    onUpdateMoonChat(filter: $filter) {
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
export const onDeleteMoonChat = /* GraphQL */ `
  subscription OnDeleteMoonChat($filter: ModelSubscriptionMoonChatFilterInput) {
    onDeleteMoonChat(filter: $filter) {
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
export const onCreatePlanetChat = /* GraphQL */ `
  subscription OnCreatePlanetChat(
    $filter: ModelSubscriptionPlanetChatFilterInput
  ) {
    onCreatePlanetChat(filter: $filter) {
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
export const onUpdatePlanetChat = /* GraphQL */ `
  subscription OnUpdatePlanetChat(
    $filter: ModelSubscriptionPlanetChatFilterInput
  ) {
    onUpdatePlanetChat(filter: $filter) {
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
export const onDeletePlanetChat = /* GraphQL */ `
  subscription OnDeletePlanetChat(
    $filter: ModelSubscriptionPlanetChatFilterInput
  ) {
    onDeletePlanetChat(filter: $filter) {
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
export const onCreateProjectChat = /* GraphQL */ `
  subscription OnCreateProjectChat(
    $filter: ModelSubscriptionProjectChatFilterInput
  ) {
    onCreateProjectChat(filter: $filter) {
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
export const onUpdateProjectChat = /* GraphQL */ `
  subscription OnUpdateProjectChat(
    $filter: ModelSubscriptionProjectChatFilterInput
  ) {
    onUpdateProjectChat(filter: $filter) {
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
export const onDeleteProjectChat = /* GraphQL */ `
  subscription OnDeleteProjectChat(
    $filter: ModelSubscriptionProjectChatFilterInput
  ) {
    onDeleteProjectChat(filter: $filter) {
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
export const onCreateTaskChat = /* GraphQL */ `
  subscription OnCreateTaskChat($filter: ModelSubscriptionTaskChatFilterInput) {
    onCreateTaskChat(filter: $filter) {
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
export const onUpdateTaskChat = /* GraphQL */ `
  subscription OnUpdateTaskChat($filter: ModelSubscriptionTaskChatFilterInput) {
    onUpdateTaskChat(filter: $filter) {
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
export const onDeleteTaskChat = /* GraphQL */ `
  subscription OnDeleteTaskChat($filter: ModelSubscriptionTaskChatFilterInput) {
    onDeleteTaskChat(filter: $filter) {
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
export const onCreatePlanetFile = /* GraphQL */ `
  subscription OnCreatePlanetFile(
    $filter: ModelSubscriptionPlanetFileFilterInput
  ) {
    onCreatePlanetFile(filter: $filter) {
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
export const onUpdatePlanetFile = /* GraphQL */ `
  subscription OnUpdatePlanetFile(
    $filter: ModelSubscriptionPlanetFileFilterInput
  ) {
    onUpdatePlanetFile(filter: $filter) {
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
export const onDeletePlanetFile = /* GraphQL */ `
  subscription OnDeletePlanetFile(
    $filter: ModelSubscriptionPlanetFileFilterInput
  ) {
    onDeletePlanetFile(filter: $filter) {
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
export const onCreateProjectFile = /* GraphQL */ `
  subscription OnCreateProjectFile(
    $filter: ModelSubscriptionProjectFileFilterInput
  ) {
    onCreateProjectFile(filter: $filter) {
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
export const onUpdateProjectFile = /* GraphQL */ `
  subscription OnUpdateProjectFile(
    $filter: ModelSubscriptionProjectFileFilterInput
  ) {
    onUpdateProjectFile(filter: $filter) {
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
export const onDeleteProjectFile = /* GraphQL */ `
  subscription OnDeleteProjectFile(
    $filter: ModelSubscriptionProjectFileFilterInput
  ) {
    onDeleteProjectFile(filter: $filter) {
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
export const onCreateTaskFile = /* GraphQL */ `
  subscription OnCreateTaskFile($filter: ModelSubscriptionTaskFileFilterInput) {
    onCreateTaskFile(filter: $filter) {
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
export const onUpdateTaskFile = /* GraphQL */ `
  subscription OnUpdateTaskFile($filter: ModelSubscriptionTaskFileFilterInput) {
    onUpdateTaskFile(filter: $filter) {
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
export const onDeleteTaskFile = /* GraphQL */ `
  subscription OnDeleteTaskFile($filter: ModelSubscriptionTaskFileFilterInput) {
    onDeleteTaskFile(filter: $filter) {
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
