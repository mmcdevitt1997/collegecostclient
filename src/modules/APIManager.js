// import useSimpleAuth from "../components/hooks/ui/useSimpleAuth";
const remoteURL = "http://localhost:8000"

// const { isAuthenticated } = useSimpleAuth();

export default Object.create(null, {

  get: {
    value: function (name, id) {
      return fetch(`${remoteURL}/${name}/${id}`, {
        "method": "GET",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("token")}`
        },
      }).then(e => e.json())
      }
  },
  getAll: {
    value: function (name) {
      // if (isAuthenticated()) {
      return fetch(`${remoteURL}/${name}`, {
        "method": "GET",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("token")}`
        },
      }).then(e => e.json())

    }
  },
  post: {
    value: function (name, newPost) {
      // if (isAuthenticated()) {
      return fetch(`${remoteURL}/${name}`, {
        "method": "POST",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(newPost)
      }).then(data => data.json())

    }
  },
  put: {
    value: function(name, updatedPost) {
      // if (isAuthenticated()) {
      return fetch(`${remoteURL}/${name}/${updatedPost.id}`, {
        "method": "PUT",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(updatedPost)
      })

    }
  },
  delete: {
    value(name, id) {
      // if (isAuthenticated()) {
      return fetch(`${remoteURL}/${name}/${id}`, {
        "method": "DELETE",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("token")}`
        }
      })
    }
  },
  chartdataAll: {
    value(collegeId) {
      // if (isAuthenticated()) {
      return fetch(`${remoteURL}/years?chartdata=true&collegeId=${collegeId}`, {
        "method": "GET",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("token")}`
        }
      }).then(e => e.json())
    }
  },
  chartdata: {
    value(name, id) {
      // if (isAuthenticated()) {
      return fetch(`${remoteURL}/${name}/${id}?chartdata=true`, {
        "method": "GET",
        "headers": {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("token")}`
        }
      }).then(e => e.json())
    }
  }

})