import React from 'react'
import { reduxForm } from 'redux-form'

const Form = () => {
    return (
        <div className="container">
            <div className="field">
                <label class="label">Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" />
                </div>
            </div>

            <div className="field">
                <label className="label">Username</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="text" placeholder="Text input" />
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
                    <input className="input" type="email" placeholder="Email input" />
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
                    <textarea className="textarea" placeholder="Textarea" />
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
                <div className="control">
                    <button className="button is-text">Cancel</button>
                </div>
            </div>
        </div>
    )
}

const WithReduxForm = reduxForm({
    form: 'simple-form'
})(Form)

export default WithReduxForm