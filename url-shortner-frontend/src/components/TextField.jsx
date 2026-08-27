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
        className={`${className || ""} font-semibold text-md text-[#0F1A2B]`}
      >
        {label}
      </label>

      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        className={`
          ${
            className || ""
          }
          px-3
          py-2
          border
          outline-none
          bg-[#D1CFC9]
          text-[#0F1A2B]
          placeholder:text-[#52677D]
          rounded-md
          focus:border-[#1C2E4A]
          focus:ring-1
          focus:ring-[#1C2E4A]
          transition-all
          duration-150
          ${
            errors[id]?.message
              ? "border-red-500"
              : "border-[#52677D]"
          }
        `}
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
                  value:
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message:
                    "Please enter a valid email address",
                }
              : type === "url"
              ? {
                  value:
                    /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
                  message:
                    "Please enter a valid URL",
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