"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import * as yup from "yup";

// Define the validation schema using yup
const schema = yup.object().shape({
  fname: yup.string().required("Vorname ist erforderlich"),
  lname: yup.string().required("Nachname ist erforderlich"),
  email: yup
    .string()
    .email("Geben Sie bitte eine gültige E-Mail Adresse ein")
    .required("E-Mail Adresse ist erforderlich"),
  phone: yup
    .string()
    .matches(
      /^[0-9\s-/+()]*$/,
      "Bitte geben Sie eine gültige Telefonnummer ein",
    )
    .nullable(), // Allow the phone field to be optional but validate if filled
  purpose: yup.string().required("Betreff ist erforderlich"),
  message: yup.string().required("Nachricht ist erforderlich"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Use yup schema as resolver
  });

  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setFeedback({
          type: "success",
          message: "E-Mail wurde erfolgreich gesendet!",
        });
        reset();
        console.log("E-Mail wurde erfolgreich gesendet!");
      } else {
        setFeedback({
          type: "error",
          message:
            "E-Mail kann nicht gesendet werden. Versuchen Sie es später erneut",
        });
        console.log("E-Mail wurde erfolgreich gesendet!");
      }
    } catch (error) {
      console.error(
        "Beim Senden der E-Mail ist ein Fehler aufgetreten:",
        error,
      );
      setFeedback({
        type: "error",
        message:
          "E-Mail kann nicht gesendet werden. Versuchen Sie es später erneut",
      });
    }
  };

  return (
    <div
      id="kontakt"
      className="container-fluid bg-primary relative z-30 pt-24 lg:pt-[150px] pb-28 md:pb-40"
    >
      <div className="row relative">
        <div className="mx-auto col-12 lg:col-10 xl:col-6">
          <div
            data-aos="fade-up-sm"
            className="shadow-default rounded-2xl bg-white px-8 py-10 sm:px-8 sm:py-14"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="row gy-4 text-dark"
            >
              <div className="sm:col-6">
                <label htmlFor="fname" className="form-label">
                  Vorname*
                </label>
                <input
                  type="text"
                  className={`form-input ${
                    errors.fname ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Geben Sie bitte Ihren Vornamen ein"
                  id="fname"
                  name="fname"
                  {...register("fname")}
                />
                {errors.fname && (
                  <p className="text-red-500 text-sm">{errors.fname.message}</p>
                )}
              </div>

              <div className="sm:col-6">
                <label htmlFor="lname" className="form-label">
                  Nachname*
                </label>
                <input
                  type="text"
                  className={`form-input ${
                    errors.lname ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Geben Sie bitte Ihren Nachnamen ein"
                  id="lname"
                  name="lname"
                  {...register("lname")}
                />
                {errors.lname && (
                  <p className="text-red-500 text-sm">{errors.lname.message}</p>
                )}
              </div>

              <div className="sm:col-6">
                <label htmlFor="email" className="form-label">
                  Email-Addresse*
                </label>
                <input
                  type="email"
                  className={`form-input ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Geben Sie bitte Ihre E-Mail Adresse ein"
                  id="email"
                  name="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="sm:col-6">
                <label htmlFor="phone" className="form-label">
                  Telefon
                </label>
                <input
                  type="text"
                  className={`form-input ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Geben Sie bitte Ihre Telefonnummer ein"
                  id="phone"
                  name="phone"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              <div className="col-12">
                <label htmlFor="purpose" className="form-label">
                  Betreff*
                </label>
                <select
                  id="purpose"
                  className={`w-full rounded-lg px-5 py-4 text-sm ${
                    errors.purpose ? "border-red-500" : "border-gray-300"
                  }`}
                  {...register("purpose")}
                >
                  <option value="Allgemein">Allgemein</option>
                  <option value="Angebot">Angebot</option>
                </select>
                {errors.purpose && (
                  <p className="text-red-500 text-sm">
                    {errors.purpose.message}
                  </p>
                )}
              </div>

              <div className="col-12">
                <label htmlFor="message" className="form-label">
                  Nachricht*
                </label>
                <textarea
                  name="message"
                  className={`form-textarea ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Geben Sie bitte eine Nachricht ein"
                  id="message"
                  cols={30}
                  rows={4}
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>
              {feedback.message && (
                <div
                  className={`${
                    feedback.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  } p-4 mb-4 rounded-lg`}
                >
                  {feedback.message}
                </div>
              )}

              <div className="col-12 text-right">
                <button type="submit" className="btn btn-primary">
                  Senden
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
