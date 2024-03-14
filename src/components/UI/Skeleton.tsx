type SkeletonProps = {
  className?: string;
};

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={`${
        className ?? ''
      } animate-pulse bg-sky-200 bg-opacity-50 h-4 w-full rounded-md`}
    ></div>
  );
}
