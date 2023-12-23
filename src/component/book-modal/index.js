import React, { useState } from "react";
import PrimaryButton from "../button";
import baseColors from "../../constant/index";
import PrimaryModal from "../modal";
import InputField from "../input-field";
import { PackageDetail } from "../../config/local-data";
import { fbAdd } from "../../config/firebase/firebase-method";

export default function BookModal({ title }) {
  const [model, setModel] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    // Implement your email validation logic here
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePhone = (phone) => {
    // Implement your phone validation logic here
    return /\d{10}/.test(phone);
  };

  const fillModel = (key, val) => {
    model[key] = val;
    setModel({ ...model });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!model.Name) {
      newErrors.name = "Name is required";
    }

    if (!model.Email || !validateEmail(model.Email)) {
      newErrors.email = "Valid email is required";
    }

    if (!model.Phone && !validatePhone(model.Phone)) {
      newErrors.phone = "Valid phone number is required";
    }

    if (!selectedPackage) {
      newErrors.packageName = "Package is required";
    }
    if (!model.afterPrice) {
      newErrors.afterPrice = "Package is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  let addPackage = () => {
    if (validateForm()) {
      setModel({});
      console.log("model" + model);
      fbAdd("book", model)
        .then((res) => {
          console.log("resp" + res);
          setModel({
            ...setModel,
          });
          setIsModalOpen(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handlePackageChange = (selectedValue) => {
    setSelectedPackage(selectedValue);
    const selectedPackageData = PackageDetail.find(
      (option) => option.value === selectedValue
    );
    fillModel("packageName", selectedPackageData?.value || "");
    fillModel("afterPrice", selectedPackageData?.afterPrice || "");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <PrimaryButton
        background={baseColors.primaryColor}
        color={baseColors.white}
        onClick={handleOpenModal}
        title={title}
        width="100%"
      />
      <PrimaryModal open={isModalOpen} close={handleCloseModal}>
        <div className="my-1">
          <InputField
            label="Enter Your Name"
            value={model.Name || ""}
            onChange={(e) => {
              fillModel("Name", e.target.value);
            }}
            error={errors.name}
            helperText={errors.name ? errors.name : null}
          />
        </div>
        <div className="my-1 flex flex-row">
          <InputField
            label="Enter Your Email"
            value={model.Email || ""}
            onChange={(e) => fillModel("Email", e.target.value)}
            error={errors.email}
            helperText={errors.email ? errors.email : null}
          />
        </div>
        <div className="my-1 flex flex-row">
          <InputField
            label="Enter Your Phone"
            value={model.Phone || ""}
            onChange={(e) => fillModel("Phone", e.target.value)}
            error={errors.phone}
            helperText={errors.phone ? errors.phone : null}
          />
        </div>

        <div className="my-1">
          <InputField
            label="Enter Your Message"
            value={model.Message || ""}
            onChange={(e) => fillModel("Message", e.target.value)}
          />
        </div>

        <div className="my-2 flex flex-row">
          <PrimaryButton
            title="Submit"
            onClick={addPackage}
            background={baseColors.blackColor}
            color={baseColors.white}
            className="hover-btn"
          />
        </div>
      </PrimaryModal>
    </>
  );
}
