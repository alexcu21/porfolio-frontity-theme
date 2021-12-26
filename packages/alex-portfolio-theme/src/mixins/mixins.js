
import {styled, css} from "frontity";
//import {css} from 'styled-components';

export const InfoOrder = ({ childNumber }) => css`
    @mixin if($args...) {
        @each $arg in $args {
            @if type-of($arg) == number {
                @for $i from 1 through $arg {
                  &:nth-child(#{$i}):nth-last-child(#{$arg - $i + 1}) {
                  @content;
                  }
                }
            }
        }
    }
`
