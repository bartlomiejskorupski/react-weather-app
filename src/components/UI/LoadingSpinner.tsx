import styles from './LoadingSpinner.module.css';

type LoadingSpinnerProps = {
  className?: string;
};

function SpinnerDot() {
  return (
    <div className="absolute size-1/5 bg-white rounded-full top-0 left-1/2 -translate-x-1/2"></div>
  );
}

export default function LoadingSpinner({ className }: LoadingSpinnerProps) {
  return (
    <div className={`${className ?? ''} relative inline-block`}>
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`absolute size-full top-0 ${styles.dotSpin}`}>
          <SpinnerDot />
        </div>
      ))}
    </div>
  );
}
