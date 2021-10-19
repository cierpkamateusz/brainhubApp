/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { Segment, Grid } from "semantic-ui-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { eventSchema, createEvent } from "./Event";

const EventComponent = ({ onSubmit }) => (
  <div>
    <h3>Create event</h3>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        date: "",
      }}
      validationSchema={eventSchema}
      onSubmit={(values, { setSubmitting }) => {
        createEvent(values);
        setSubmitting(false);
        onSubmit();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Segment raised>
            <Grid>
              <Grid.Row>
                <Field type="text" name="firstName" data-testid="firstName" />
                <ErrorMessage name="firstName" />
              </Grid.Row>

              <Grid.Row>
                <Field type="text" name="lastName" data-testid="lastName" />
                <ErrorMessage name="lastName" />
              </Grid.Row>

              <Grid.Row>
                <Field type="email" name="email" data-testid="email" />
                <ErrorMessage name="email" />
              </Grid.Row>

              <Grid.Row>
                <Field type="date" name="date" data-testid="date" />
                <ErrorMessage name="date" />
              </Grid.Row>

              <Grid.Row>
                <button
                  type="submit"
                  data-testid="submitButton"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </Grid.Row>
            </Grid>
          </Segment>
        </Form>
      )}
    </Formik>
  </div>
);

export default EventComponent;
