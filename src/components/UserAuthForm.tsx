import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useFormik } from 'formik';


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }
export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Please input username <strong>kminchelle</strong>'),
            password: Yup.string().required('Please input password <strong>0lelplR</strong>'),
        }),
        onSubmit: async (values, { setSubmitting }) => {
            setIsLoading(true);
            if (values.username !== 'kminchelle' || values.password !== '0lelplR') {
                if (values.username !== 'kminchelle') {
                    formik.setFieldError('username', 'Please input username <strong>kminchelle</strong>');
                }
                if (values.password !== '0lelplR') {
                    formik.setFieldError('password', 'Please input password <strong>0lelplR</strong>');
                }
                setIsLoading(false);
                setSubmitting(false);
                return;
            }
            try {
                const response = await axios.post('https://dummyjson.com/auth/login', values);
                console.log('API Response:', response.data);
                // Handle the response
                navigate("/dashboard")
            } catch (error) {
                console.error('API Request Error:', error);
                // Handle the error
            } finally {
                setIsLoading(false);
                setSubmitting(false);
            }
        },
    });

    return (
        <>
            <div className={cn("grid gap-6", className)} {...props}>  <form onSubmit={formik.handleSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="username">
                            Username
                        </Label>
                        <Input
                            id="username"
                            type="text"
                            autoComplete="username"
                            disabled={isLoading}
                            {...formik.getFieldProps('username')} // Update input with formik props
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className="text-red-500" dangerouslySetInnerHTML={{ __html: formik.errors.username }} />
                        ) : null}
                    </div>
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="password">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            disabled={isLoading}
                            {...formik.getFieldProps('password')} // Update input with formik props
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500" dangerouslySetInnerHTML={{ __html: formik.errors.password }} />
                        ) : null}
                    </div>
                    <Button disabled={isLoading}>
                        {isLoading && (
                            <div className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Sign In
                    </Button>
                </div>
            </form> </div>



        </>

    )
}
