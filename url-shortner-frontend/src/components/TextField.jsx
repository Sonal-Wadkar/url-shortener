const TextField = ({
  label,
  id,
  type,
  errors,
  register,
  required = false,
  message,
  className,
  min,
  value,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={`${className || ""} font-semibold text-md`}
      >
        {label}
      </label>

      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        className={`${
          className || ""
        } px-2 py-2 border outline-none bg-transparent text-slate-700 rounded-md ${
          errors[id]?.message
            ? "border-red-500"
            : "border-slate-600"
        }`}
        {...register(id, {
          required: {
            value: required,
            message: message || `${label} is required`,
          },

          minLength: min
            ? {
                value: min,
                message: `Minimum ${min} characters are required`,
              }
            : undefined,

          pattern:
            type === "email"
              ? {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address",
                }
              : type === "url"
              ? {
                  value:
                    /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
                  message: "Please enter a valid URL",
                }
              : undefined,
        })}
      />

      {errors[id]?.message && (
        <p className="text-sm font-semibold text-red-600 mt-0">
          {errors[id]?.message}*
        </p>
      )}
    </div>
  );
};

export default TextField;