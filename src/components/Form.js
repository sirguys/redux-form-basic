import React from 'react'
import { reduxForm, Field } from 'redux-form'

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <Field
            component="input"
            placeholder="Text input"
            className="input"
            name="name"
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
          <Field
            component="input"
            placeholder="Text input"
            className="input"
            name="username"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user" />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check" />
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <Field
            component="input"
            placeholder="Email input"
            className="input"
            name="email"
            type="email"
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle" />
          </span>
        </div>
      </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <Field
            component="input"
            placeholder="Textarea"
            className="textarea"
            name="message"
          />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link" type="submit">
            Submit
          </button>
        </div>
        <div className="control">
          <button className="button is-text">Cancel</button>
        </div>
      </div>
    </form>
  )
}

const WithReduxForm = reduxForm({
  form: 'simple-form'
})(Form)

export default WithReduxForm
