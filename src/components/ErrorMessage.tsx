export type ErrorMessageProps = {
  errorMessage: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => (
  <div className="flex justify-center">
    <div className="origin-top rounded-md p-2 bg-red-200 w-1/2">
      <div className="text-center text-red-700">{errorMessage}</div>
    </div>
  </div>
);
